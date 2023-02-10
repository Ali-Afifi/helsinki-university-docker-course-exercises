FROM node:16-alpine

WORKDIR /usr/app

COPY . .

ENV REACT_APP_BACKEND_URL http://localhost:8080/

RUN npm install && \
    npm run build && \
    npm install -g serve && \
    rm -rf ./src ./public ./node_modules && \
    adduser -D appuser && \
    chown -R appuser:appuser /usr/app

USER appuser

EXPOSE 5000

CMD ["npx", "serve", "-s", "-l", "5000", "build"]
