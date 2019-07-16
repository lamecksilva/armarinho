FROM node:11-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install -g yarn --quiet

RUN yarn global add nodemon && yarn

COPY . . 

EXPOSE 9000

CMD yarn dev