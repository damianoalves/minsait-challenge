FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

RUN npm audit fix

COPY . .

EXPOSE 3000

CMD [ "node", "src/index.mjs" ]