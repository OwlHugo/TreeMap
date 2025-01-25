FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon ts-node-dev

EXPOSE 3333

CMD ["npm", "run", "start"]
