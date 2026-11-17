# Agente de contratos con IA

Aplicación Angular y API Node.js para atender consultas sobre contratos, recibir documentos y registrar los datos extraídos.

## Ejecutar localmente

Requiere Node.js 24+ y npm 11+.

```powershell
npm ci
npm run build
npm start
```

Abra `http://localhost:3333`. El backend sirve el frontend compilado y la API desde la misma URL.

Para desarrollo con recarga automática, ejecute además:

```powershell
npm run start:web -- --port 4200
```

## Variables de entorno

| Variable | Uso |
| --- | --- |
| `PORT` | Puerto HTTP; por defecto `3333`. |
| `OPENAI_API_KEY` | Clave usada solo por el backend para IA real. |
| `OPENAI_MODEL` | Modelo; por defecto `gpt-4.1-mini`. |

Sin `OPENAI_API_KEY`, el bot utiliza una respuesta de respaldo segura para permitir pruebas.

## Despliegue en Render

`render.yaml` define un servicio web listo para usar. Conecte el repositorio en Render mediante **New + → Blueprint**, establezca `OPENAI_API_KEY` como secreto y Render creará una URL pública.

Los contratos se guardan localmente solo para demostración. Para producción, use almacenamiento de archivos y una base de datos persistentes.
