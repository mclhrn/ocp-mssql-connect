FROM node:lts-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm cache clean
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
