# 🌸 Floristería

Catálogo de flores online desarrollado con Next.js 16, Tailwind CSS y Nginx.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con SSR
- **React 19** - Biblioteca de UI
- **Tailwind CSS 4** - Estilos utility-first
- **Axios** - Cliente HTTP
- **Nginx** - Reverse proxy
- **Docker** - Contenedorización

## 📁 Estructura del proyecto

```
src/
├── app/                    # Rutas de Next.js (App Router)
│   ├── page.tsx            # Página principal (catálogo)
│   └── product/[id]/       # Página de detalle de producto
├── components/             # Componentes reutilizables
├── features/               # Módulos por funcionalidad
│   ├── catalog/            # Vista del catálogo
│   └── product-detail/     # Vista de detalle
├── services/               # Clientes API
└── types/                  # Tipos TypeScript
```

## 🛠️ Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 🐳 Docker

### Variables de entorno

Crear archivo `.env` en la raíz:

### Construir y ejecutar

```bash
# Construir imagen
docker compose build

# Ejecutar contenedor
docker compose up -d
```

La aplicación estará disponible en [Dulces-Petalos](http://143.47.46.147/)

## 🏗️ Arquitectura de producción

```
Usuario → Nginx (puerto 80) → Next.js (puerto 3000)
```

- **Nginx**: Compresión gzip, cabeceras de seguridad
- **Next.js**: Renderizado SSR, rutas dinámicas

## 📦 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción |
| `npm run lint` | Linter ESLint |

## 🌐 Deploy

El proyecto incluye GitHub Actions para CI/CD automático en push a `main`.

```yaml
# .github/workflows/deploy.yml
docker compose --env-file /etc/envvars/floristeria/.env up -d --build
```
