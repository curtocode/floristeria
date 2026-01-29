#!/bin/sh

# Iniciar Nginx en segundo plano
nginx -g "daemon off;" &

# Iniciar Next.js en primer plano
exec node server.js
