FROM node:14.16.1-alpine3.13

WORKDIR /usr/src/finance-auth
COPY . .

RUN npm ci

EXPOSE 3000

CMD node index.js
