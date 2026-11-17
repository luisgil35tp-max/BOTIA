const http = require('node:http');
const { mkdir, readFile, writeFile } = require('node:fs/promises');
const { existsSync } = require('node:fs');
const { extname, join, normalize, resolve } = require('node:path');
const { Readable } = require('node:stream');

const port = Number(process.env.PORT || 3333);
const dataDirectory = join(__dirname, 'data');
const contractsFile = join(dataDirectory, 'contracts.json');
const staticDirectory = join(__dirname, '..', 'dist', 'botia', 'browser');
const allowedTypes = new Set(['application/pdf', 'text/plain', 'text/csv', 'application/json', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword']);

function send(response, status, body) {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'access-control-allow-headers': 'content-type', 'access-control-allow-methods': 'GET, POST, OPTIONS' });
  response.end(JSON.stringify(body));
}

async function serveFrontend(request, response) {
  if (request.method !== 'GET' || !existsSync(staticDirectory)) return false;
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  const candidate = resolve(staticDirectory, `.${normalize(pathname)}`);
  const filePath = candidate.startsWith(resolve(staticDirectory)) && existsSync(candidate) && extname(candidate) ? candidate : join(staticDirectory, 'index.html');
  const contentType = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' }[extname(filePath)] || 'application/octet-stream';
  response.writeHead(200, { 'content-type': `${contentType}; charset=utf-8` });
  response.end(await readFile(filePath));
  return true;
}

async function readContracts() {
  if (!existsSync(contractsFile)) return [];
  return JSON.parse(await readFile(contractsFile, 'utf8'));
}

async function saveContracts(contracts) {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(contractsFile, JSON.stringify(contracts, null, 2), 'utf8');
}

function extract(text) {
  const value = (regex) => text.match(regex)?.[1]?.trim() || 'Por validar';
  return {
    client: value(/(?:cliente|contratante)\s*[:#-]?\s*([^\n,;]+)/i),
    contractNumber: value(/(?:contrato|n[úu]mero)\s*(?:no\.?|#)?\s*[:#-]?\s*([\w-]+)/i),
    amount: value(/(?:valor|monto|importe)\s*[:#-]?\s*([^\n;]+)/i),
    status: text.length > 30 ? 'Procesado' : 'Revisión requerida',
  };
}

async function aiResponse(question) {
  if (!process.env.OPENAI_API_KEY) {
    return `Entendí tu solicitud: “${question}”. Puedo orientar al solicitante y registrar el contrato. Antes de compartir o firmar información contractual, valida los datos extraídos.`;
  }
  const result = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4.1-mini', input: [{ role: 'system', content: 'Eres un asistente de contratos. Responde en español, de manera breve. No inventes datos, ni des asesoría legal definitiva; pide revisión humana cuando corresponda.' }, { role: 'user', content: question }] }),
  });
  if (!result.ok) throw new Error('El proveedor de IA no pudo completar la respuesta.');
  const payload = await result.json();
  return payload.output_text || 'No fue posible generar una respuesta.';
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === 'OPTIONS') return send(response, 204, {});
    if (request.method === 'GET' && request.url === '/health') return send(response, 200, { status: 'ok' });
    if (request.method === 'GET' && request.url === '/contracts') return send(response, 200, await readContracts());
    if (request.method === 'POST' && request.url === '/agent/reply') {
      let body = ''; for await (const chunk of request) body += chunk;
      const { question } = JSON.parse(body || '{}');
      if (typeof question !== 'string' || !question.trim()) return send(response, 400, { error: 'La pregunta es obligatoria.' });
      return send(response, 200, { answer: await aiResponse(question.trim()) });
    }
    if (request.method === 'POST' && request.url === '/contracts') {
      const webRequest = new Request('http://localhost/contracts', { method: 'POST', headers: request.headers, body: Readable.toWeb(request), duplex: 'half' });
      const form = await webRequest.formData();
      const files = form.getAll('contracts').filter((value) => typeof value !== 'string');
      if (!files.length) return send(response, 400, { error: 'Debes adjuntar al menos un contrato.' });
      const records = await Promise.all(files.map(async (file) => {
        if (file.size > 10 * 1024 * 1024) throw new Error(`${file.name} supera el límite de 10 MB.`);
        if (!allowedTypes.has(file.type) && !/\.(pdf|docx?|txt|csv|json)$/i.test(file.name)) throw new Error(`Formato no permitido: ${file.name}`);
        const plainText = /^(text\/|application\/json)/.test(file.type) || /\.(txt|csv|json)$/i.test(file.name);
        const fields = plainText ? extract(await file.text()) : { client: 'Pendiente de IA/OCR', contractNumber: 'Por validar', amount: 'Por validar', status: 'Revisión requerida' };
        return { id: crypto.randomUUID(), fileName: file.name, ...fields, createdAt: new Date().toISOString() };
      }));
      const allContracts = [...records, ...(await readContracts())];
      await saveContracts(allContracts);
      return send(response, 201, records);
    }
    if (await serveFrontend(request, response)) return;
    send(response, 404, { error: 'Ruta no encontrada.' });
  } catch (error) { send(response, 500, { error: error instanceof Error ? error.message : 'Error interno.' }); }
});

server.listen(port, () => console.log(`API de contratos disponible en http://localhost:${port}`));
