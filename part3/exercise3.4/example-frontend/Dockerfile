FROM ubuntu:18.04

WORKDIR /usr/app

COPY . .

ENV REACT_APP_BACKEND_URL http://localhost:8080/

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install && \
    npm run build && \
    npm install -g serve && \
    rm -rf ./src ./public ./node_modules && \
    rm -rf /var/lib/apt/lists/* && \
    useradd -m appuser && \
    chown -R appuser:appuser /usr/app

USER appuser

EXPOSE 5000

CMD ["npx", "serve", "-s", "-l", "5000", "build"]
