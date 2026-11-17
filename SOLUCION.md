# Solución: agente de contratos

## Objetivo

Atender automáticamente consultas iniciales de personas que van a diligenciar contratos, recibir sus archivos, extraer los campos esenciales y conservar un historial para revisión humana.

## Arquitectura

```text
Navegador (Angular)
  ├─ Panel de consulta ─────────────── POST /agent/reply
  ├─ Carga de documentos ───────────── POST /contracts
  └─ Historial y métricas ──────────── GET  /contracts
                                      │
                                      ▼
                             API Node.js (server.js)
                              ├─ Validación de tipo y tamaño
                              ├─ Extracción por patrones (TXT/CSV/JSON)
                              ├─ OpenAI Responses API (opcional)
                              └─ Persistencia JSON local
```

En despliegue, Node sirve tanto los archivos compilados de Angular como la API. Así el navegador usa rutas relativas y no se requiere configurar CORS entre dominios.

## Componentes

| Componente | Archivo | Responsabilidad |
| --- | --- | --- |
| Interfaz | `src/app/app.html` y `app.scss` | Panel del bot, carga y tabla de contratos. |
| Estado cliente | `src/app/agent.service.ts` | Llama a la API, recupera historial y conserva respaldo local. |
| API | `src/backend/server.js` | Rutas HTTP, validación, IA, extracción y archivos estáticos. |
| Configuración | `src/environments/*` | URL de API por entorno. Producción usa el mismo origen. |
| Despliegue | `render.yaml` | Servicio web único en Render. |

## Flujo detallado

1. La persona escribe una pregunta en la interfaz.
2. Angular envía el texto a `POST /agent/reply`.
3. La API usa `OPENAI_API_KEY` para solicitar una respuesta al modelo; la clave nunca llega al navegador.
4. Si no hay clave, la API usa una respuesta de respaldo que permite probar el proceso sin credenciales.
5. La persona carga uno o más documentos de contrato.
6. La API limita cada archivo a 10 MB y permite PDF, DOC, DOCX, TXT, CSV y JSON.
7. Para TXT, CSV y JSON extrae `cliente`, `número de contrato` y `valor` con patrones; para PDF/DOCX registra “Revisión requerida”.
8. Se almacena un registro con identificador, archivo, campos, estado y fecha.
9. Angular actualiza las métricas y la tabla de historial.

## Endpoints

| Método | Ruta | Resultado |
| --- | --- | --- |
| GET | `/health` | Estado de disponibilidad de la API. |
| GET | `/contracts` | Historial de contratos. |
| POST | `/agent/reply` | Recibe `{ "question": "..." }` y devuelve `{ "answer": "..." }`. |
| POST | `/contracts` | Recibe `multipart/form-data` en el campo `contracts`. |

## Seguridad y límites

- La clave de IA se lee únicamente desde variables de entorno del servidor.
- El bot avisa que los datos contractuales requieren validación humana; no emite una decisión legal.
- El tipo y tamaño del archivo se validan antes de extraer contenido.
- La persistencia JSON es solo una solución de demostración. En producción se requiere base de datos, almacenamiento cifrado de archivos, autenticación, autorización y auditoría.
- Los PDF y DOCX necesitan OCR o extracción documental antes de poder automatizar campos de forma fiable.

## Publicación

`render.yaml` crea un servicio Render que ejecuta `npm ci && npm run build` y después `npm start`. Render asigna la URL pública tras conectar un repositorio y desplegarlo. Configure `OPENAI_API_KEY` como secreto desde el panel de Render, no dentro de archivos del repositorio.
