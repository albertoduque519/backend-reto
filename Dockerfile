FROM node:latest

WORKDIR /usr/src/node
COPY package.json /usr/src/node/

RUN npm install --only=production && npm install -g pm2
COPY . .

EXPOSE 3000
CMD [ "pm2-runtime", "npm", "--", "start"]