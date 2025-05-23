FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

EXPOSE 3000

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
