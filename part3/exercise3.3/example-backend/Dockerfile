FROM golang:1.16-alpine
WORKDIR /app
COPY ./go.mod ./
COPY ./go.sum ./
RUN go mod download
COPY . ./
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000
RUN go build 
RUN adduser -DH appuser
RUN chown -R appuser:appuser /app
USER appuser
EXPOSE 8080
CMD ["./server"]
