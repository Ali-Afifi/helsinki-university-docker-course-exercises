FROM golang:1.16-alpine
WORKDIR /app
COPY ./go.mod ./
COPY ./go.sum ./
RUN go mod download
COPY . ./
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000
EXPOSE 8080
RUN go build
CMD ["./server"]
