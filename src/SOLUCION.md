# Solución: agente de contratos

## Objetivo

Responder preguntas iniciales sobre contratos, recibir archivos, extraer campos clave y mantener un historial validable por personas.

## Arquitectura

```text
Angular
  ├─ Preguntas ─────────────── POST /agent/reply
  ├─ Carga ─────────────────── POST /contracts
  └─ Historial ─────────────── GET  /contracts
                                      │
                                      ▼
                              API Node.js
                               ├─ Validación
                               ├─ Extracción TXT/CSV/JSON
                               ├─ IA opcional (OpenAI)
                               └─ Persistencia JSON de demostración
```

Node sirve los archivos Angular compilados y la API, por lo que en producción ambos comparten el mismo origen.

## Flujo

1. Angular envía la consulta a `POST /agent/reply`.
2. El backend usa la clave `OPENAI_API_KEY` desde el entorno; nunca desde el navegador.
3. El usuario carga archivos en el campo multipart `contracts`.
4. Se valida un máximo de 10 MB y los formatos PDF, DOC, DOCX, TXT, CSV y JSON.
5. TXT, CSV y JSON extraen cliente, número y valor por patrones. PDF/DOCX se marcan para revisión hasta integrar OCR.
6. Se registra identificador, archivo, campos, estado y fecha; Angular muestra las métricas e historial.

## Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/health` | Salud del servicio. |
| GET | `/contracts` | Historial de contratos. |
| POST | `/agent/reply` | Recibe `{ "question": "..." }`. |
| POST | `/contracts` | Recibe multipart con `contracts`. |

## Seguridad y producción

- La IA y sus secretos se mantienen en el backend.
- El agente no sustituye la validación contractual o legal humana.
- El almacenamiento JSON es temporal y apropiado solo para demostración.
- Producción requiere autenticación, autorización, auditoría, base de datos y almacenamiento cifrado.

## Despliegue

El archivo `render.yaml` instala dependencias, compila Angular y ejecuta `npm start`. Configure `OPENAI_API_KEY` desde las variables secretas del proveedor.
