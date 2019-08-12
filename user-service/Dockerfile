FROM node:alpine

WORKDIR /app

MAINTAINER Lameck lameck2@hotmail.com

COPY package.json .

RUN npm i

COPY . .

CMD ["node", "index.js"]
