# Estágio 1: Build da Aplicação React/Vite
# Usamos uma imagem oficial do Node.js para construir o projeto
FROM node:20-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de gerenciamento de pacotes
COPY package.json package-lock.json ./

# Instala o pnpm (gerenciador de pacotes do projeto) e as dependências
RUN npm install -g pnpm
RUN pnpm install

# Copia o resto do código-fonte da aplicação
COPY . .

# Executa o comando para construir a aplicação para produção
# Isso vai gerar a pasta /app/dist com os arquivos estáticos
RUN pnpm run build

# ---

# Estágio 2: Servidor de Produção
# Usamos uma imagem super leve do Nginx para servir os arquivos
FROM nginx:stable-alpine

# Copia os arquivos estáticos construídos no estágio anterior 
# para a pasta padrão do Nginx que serve conteúdo web.
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx para dentro do container.
# Este arquivo é crucial para o funcionamento do React Router.
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx em modo "foreground"
CMD ["nginx", "-g", "daemon off;"]
