---
layout: post
title: "Containerizando meu ambiente Jekyll com Docker"
date: 2026-05-17
categories: [jekyll, docker, linux]
tags: [docker, jekyll, wsl, ubuntu]
excerpt: "Depois de testar o Jekyll em uma máquina virtual, decidi simplificar meu ambiente de desenvolvimento usando Docker para evitar ter que subir uma VM sempre que quiser escrever ou revisar um post."
---

## Introdução

Depois de configurar e testar meu ambiente do jekyll em uma máquina virtual, percebi que manter esse fluxo no dia a dia seria meio cansativo.

Toda vez que eu quisesse escrever um novo artigo ou revisar alguma alteração localmente, precisaria:
- ligar a VM;
- acessar o ambiente;
- iniciar o Jekyll;
- e só então começar a trabalhar.

Para evitar esse atrito, decidi containerizar o ambiente usando docker.

Assim, posso editar os arquivos normalmente no meu host e, quando quiser visualizar o blog localmente, basta executar um simples:

```bash
docker compose up
```

## Meu ambiente

Atualmente uso:
- Windows;
- WSL;
- Ubuntu Server 24.04 dentro do WSL.

A instalação do Docker foi feita seguindo praticamente a documentação oficial:

[Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)


## Removendo versões antigas do Docker

Antes da instalação, removi possíveis pacotes antigos:

```bash
sudo apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc podman-docker containerd runc | cut -f1)
```

Isso ajuda a evitar conflitos entre versões diferentes do Docker e do Compose.


## Adicionando o repositório oficial do Docker

Primeiro atualizei os pacotes necessários:

```bash
sudo apt update
sudo apt install ca-certificates curl
```

Depois adicionei a chave GPG oficial:

```bash
sudo install -m 0755 -d /etc/apt/keyrings

sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  -o /etc/apt/keyrings/docker.asc

sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Em seguida, configurei o repositório:

```bash
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF
```

Por fim, atualizei novamente os índices do apt:

```bash
sudo apt update
```


## Instalando o Docker

Com o repositório configurado, basta instalar os pacotes:

```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Depois da instalação, vale verificar se o serviço está rodando:

```bash
sudo systemctl status docker
```

Se não estiver ativo:

```bash
sudo systemctl start docker
```

Para validar a instalação:

```bash
sudo docker run hello-world
```

Se tudo estiver funcionando corretamente, o Docker irá baixar uma imagem de teste e exibir uma mensagem de confirmação.


## Criando o ambiente do Jekyll

Com o Docker instalado, fui até a raiz do projeto e criei dois arquivos:
- `Dockerfile`
- `docker-compose.yml`


## Dockerfile

```dockerfile
FROM ruby:3.2

RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    npm

WORKDIR /srv/jekyll

RUN gem install bundler

RUN gem install jekyll -v 3.10.0

EXPOSE 4000
```

### O que esse Dockerfile faz

Alguns pontos importantes:

- `ruby:3.2` define a imagem base;
- `build-essential` instala ferramentas necessárias para compilar gems nativas;
- `nodejs` e `npm` são usados por dependências do Jekyll;
- `WORKDIR` define o diretório de trabalho dentro do container;
- `EXPOSE 4000` documenta a porta usada pelo servidor local do Jekyll.

Também optei por instalar explicitamente a versão `3.10.0` do Jekyll para manter compatibilidade com meu projeto atual.


## docker-compose.yml

```yaml
services:
  jekyll:
    container_name: jekyll-dev
    build: .
    volumes:
      - .:/srv/jekyll
    ports:
      - "4000:4000"
    working_dir: /srv/jekyll
    command: sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --watch"
```

## Entendendo a configuração

Aqui estão alguns pontos importantes da configuração:

### `volumes`

```yaml
- .:/srv/jekyll
```

Esse volume sincroniza os arquivos do projeto entre o host e o container.

Na prática, qualquer alteração feita localmente fica imediatamente disponível dentro do container.


### `ports`

```yaml
- "4000:4000"
```

Expõe a porta padrão do Jekyll para o host.

Assim, o blog pode ser acessado no navegador através de:

```text
http://localhost:4000
```


### `command`

```yaml
bundle install && bundle exec jekyll serve --host 0.0.0.0 --watch
```

Esse comando:
1. instala as dependências do projeto;
2. inicia o servidor do Jekyll;
3. habilita reload automático ao editar arquivos.

O parâmetro:

```bash
--host 0.0.0.0
```

é importante para permitir acesso ao servidor fora do container.


## Subindo o ambiente

Depois de configurar tudo, basta executar:

```bash
sudo docker compose up -d
```

Na primeira execução o Docker irá:
- baixar a imagem base;
- construir o container;
- instalar as gems;
- iniciar o servidor do Jekyll.

Depois disso, o blog ficará disponível em:

```text
http://localhost:4000
```


## Resultado

Com isso, deixei de depender da máquina virtual para desenvolver o blog.

Agora o ambiente fica muito mais simples:
- abro o projeto;
- executo `docker compose up`;
- escrevo normalmente;
- e acompanho as mudanças em tempo real.

Além de simplificar o fluxo, isso também facilita reproduzir o ambiente futuramente sem precisar reinstalar tudo manualmente.