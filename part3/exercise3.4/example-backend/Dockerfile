FROM ubuntu:18.04
WORKDIR /app
COPY . .
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000
ENV PATH=/usr/local/go/bin:$PATH
RUN apt-get update && \ 
    apt-get install -y wget ca-certificates && \ 
    rm -rf /usr/local/go && \ 
    wget -c https://golang.org/dl/go1.16.3.linux-amd64.tar.gz && \ 
    tar -C /usr/local -xzf go1.16.3.linux-amd64.tar.gz && \ 
    go mod download && \ 
    go build  && \ 
    apt-get purge -y --auto-remove wget && \
    apt-get autoclean && apt-get autoremove --purge && apt-get clean && \
    rm -rf /var/lib/apt/lists/* /usr/local/go /usr/local/.go && \
    rm -rf $(echo $GOPATH) && \
    rm -rf ./app* ./go* ./cache ./common ./controller ./pgconnection ./router && \ 
    useradd -m appuser && \
    chown -R appuser:appuser /app && ls /app
USER appuser
EXPOSE 8080
CMD ["./server"]
