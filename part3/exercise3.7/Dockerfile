FROM node:current-alpine3.16 AS builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM node:current-alpine3.16

WORKDIR /app

COPY package.json ./

COPY --from=builder /app/dist .

RUN npm install --only=production && \
    adduser -D appuser && chown -R appuser:appuser /app && ls /app

USER appuser

EXPOSE 8080

CMD ["node","index.js"]
