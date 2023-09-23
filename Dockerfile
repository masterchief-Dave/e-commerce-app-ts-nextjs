FROM node:18-alpine

USER node

WORKDIR /app

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 3002

CMD [ "npm", "run", "dev" ]