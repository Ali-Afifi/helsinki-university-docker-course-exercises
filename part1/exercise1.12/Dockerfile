FROM node:16.19.0-alpine
RUN npm install -g serve
WORKDIR /usr/app/
COPY ./example-frontend/ /usr/app/
RUN npm install
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "-l", "5000", "build"]
