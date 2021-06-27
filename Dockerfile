FROM node:14

RUN mkdir -p /credituPlayers
WORKDIR /credituPlayers

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]