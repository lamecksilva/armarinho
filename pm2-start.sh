#/bin/bash

exec $(pm2 start --name "Armarinho-User-Service" user-service/src/index.ts --watch)
exec pm2 start --name "Armarinho-Product-Service" product-service/index.ts 