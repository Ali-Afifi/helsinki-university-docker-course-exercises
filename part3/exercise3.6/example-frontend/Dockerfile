FROM node:16-alpine AS builder

WORKDIR /usr/app

COPY . .

ENV REACT_APP_BACKEND_URL http://localhost:8080/

RUN npm install && npm run build 

FROM caddy:alpine

WORKDIR /etc/caddy

COPY --from=builder /usr/app/build /usr/app/build

COPY ./Caddyfile /etc/caddy/Caddyfile

EXPOSE 5000
