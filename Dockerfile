FROM node:20-alpine

WORKDIR /app

COPY . .

# Instala dependências antes
RUN npm install

# Expõe porta de produção
EXPOSE 3000

# Faz o build no momento de execução e serve
CMD npm run build && npx serve -s build -l 3000
