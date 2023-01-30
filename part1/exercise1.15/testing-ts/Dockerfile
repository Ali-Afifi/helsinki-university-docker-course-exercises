FROM node:16.19.0-alpine

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY . /home/node/app/

RUN npm i

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
