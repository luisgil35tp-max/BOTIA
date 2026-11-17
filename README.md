# Agente de contratos

Aplicación Angular con una API Node.js para atender consultas sobre contratos, recibir documentos y registrar los datos extraídos.

## Requisitos

- Node.js 24 o superior
- npm 11 o superior

## Ejecutar localmente

```powershell
npm ci
npm run build
npm start
```

La aplicación quedará disponible en `http://localhost:3333`. El backend sirve la compilación de Angular y también la API. Para desarrollo con recarga automática de la interfaz, use otra consola:

```powershell
npm run start:web -- --port 4200
```

En ese caso, mantenga también `npm start` en ejecución para que el frontend use la API en `http://localhost:3333`.

## Variables de entorno

| Variable | Requerida | Uso |
| --- | --- | --- |
| `PORT` | No | Puerto HTTP. Por defecto: `3333`. |
| `OPENAI_API_KEY` | Para IA real | Clave usada solo por el backend para generar respuestas. No se publica en Angular. |
| `OPENAI_MODEL` | No | Modelo de respuestas. Por defecto: `gpt-4.1-mini`. |

Sin `OPENAI_API_KEY` el bot devuelve una respuesta segura de respaldo para poder probar el flujo.

## Pruebas

```powershell
npm run build
node --check src/backend/server.js
```

Pruebe `GET /health`, realice una pregunta en el panel y cargue un TXT, CSV o JSON. Los PDF y DOCX quedan marcados para revisión hasta integrar OCR.

## Despliegue público en Render

El archivo `render.yaml` contiene la definición del servicio. Para publicar:

1. Suba este repositorio a GitHub, GitLab o Bitbucket.
2. En Render, seleccione **New +** → **Blueprint** y conecte el repositorio.
3. Añada `OPENAI_API_KEY` como variable secreta si se requieren respuestas de IA real.
4. Render generará la URL pública `https://<nombre>.onrender.com`.

El plan gratuito de Render puede suspender el servicio por inactividad. El almacenamiento local de contratos es efímero en ese plan; para producción conecte una base de datos y almacenamiento de archivos persistente.
