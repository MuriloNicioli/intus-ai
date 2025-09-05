# Estágio 1: Build da Aplicação React/Vite
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de gerenciamento de pacotes
# CORREÇÃO: Copiando o pnpm-lock.yaml em vez do package-lock.json
COPY package.json pnpm-lock.yaml ./

# Instala o pnpm e as dependências
RUN npm install -g pnpm
RUN pnpm install

# Copia o resto do código-fonte da aplicação
COPY . .

# Executa o comando para construir a aplicação para produção
RUN pnpm run build

# ---

# Estágio 2: Servidor de Produção
FROM nginx:stable-alpine

# Copia os arquivos estáticos construídos no estágio anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]