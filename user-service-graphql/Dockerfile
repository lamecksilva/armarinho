# "Declarando" a imagem a ser "copiada" para o container
FROM node:alpine

# Installing bcrypt dependencies
RUN apk --no-cache add --virtual builds-deps build-base python

# Declarando a "pasta" em que os arquivos serão adicionados dentro 
# do container
WORKDIR /app

# Copiando o package.json para o nosso WORKDIR, para instalar as
# dependências do projeto
COPY package.json .

# Rodando o comando para instalar dependências
RUN npm install

# Copiando todos os arquivos para o WORKDIR
COPY . .

