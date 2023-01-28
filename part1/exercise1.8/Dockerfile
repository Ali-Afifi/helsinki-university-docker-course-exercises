FROM ubuntu:20.04
RUN apt-get -y update && apt-get -y install curl
WORKDIR /usr/src/app
COPY my-script.sh .
RUN chmod +x my-script.sh
CMD ./my-script.sh
