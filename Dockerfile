# Dockerfile para React App (Create React App)
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Build do projeto para produção
RUN npm run build

# Servidor estático com serve
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expõe a porta padrão
EXPOSE 3000
