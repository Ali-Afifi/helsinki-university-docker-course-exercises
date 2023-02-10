FROM golang:1.16-alpine
WORKDIR /app
COPY . .
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000
ENV PATH=/usr/local/go/bin:$PATH
RUN go mod download && \
    go build  && \
    rm -rf /usr/local/go /usr/local/.go /var/cache/apk/* /etc/apk/repositories && \
    rm -rf ./app* ./go* ./cache ./common ./controller ./pgconnection ./router && \
    adduser -D appuser && \
    chown -R appuser:appuser /app && ls /app
USER appuser
EXPOSE 8080
CMD ["./server"]
