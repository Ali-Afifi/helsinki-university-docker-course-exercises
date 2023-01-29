FROM golang:1.16-alpine
WORKDIR /app
COPY ./example-backend/go.mod ./
COPY ./example-backend/go.sum ./
RUN go mod download
COPY ./example-backend/ ./
RUN go build
ENV PORT=8080
EXPOSE 8080
CMD ["./server"]
