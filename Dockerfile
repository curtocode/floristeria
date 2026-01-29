# ========================================
# ETAPA 1: DEPENDENCIAS
# ========================================
FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

# ========================================
# ETAPA 2: BUILD
# ========================================
FROM node:20-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

# ========================================
# ETAPA 3: PRODUCCIÓN CON NGINX
# ========================================
FROM node:20-alpine AS runner

WORKDIR /app

# Instalar Nginx
RUN apk add --no-cache nginx

ENV NODE_ENV=production

# Crear usuario no-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos de Next.js
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copiar configuración de Nginx
COPY nginx/nginx.conf /etc/nginx/http.d/default.conf

# Crear directorios necesarios para Nginx
RUN mkdir -p /var/log/nginx /var/lib/nginx/tmp /run/nginx
RUN chown -R nextjs:nodejs /var/log/nginx /var/lib/nginx /run/nginx

# Exponer puerto 80 (Nginx)
EXPOSE 80

# Variable de entorno para Next.js
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Iniciar Next.js directamente
CMD ["node", "server.js"]
