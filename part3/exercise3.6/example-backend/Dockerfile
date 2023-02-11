FROM golang:1.16-alpine AS builder

WORKDIR /app

COPY . .

ENV PORT=8080

ENV REQUEST_ORIGIN=http://localhost:5000

ENV PATH=/usr/local/go/bin:$PATH

RUN go mod download && go build 

FROM alpine:3.16

WORKDIR /app

COPY --from=builder /app/server /app/server

ENV PORT=8080

ENV REQUEST_ORIGIN=http://localhost:5000

EXPOSE 8080

CMD ["./server"]
