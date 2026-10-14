# Módulo 27 - Docker for Testers

Exercício de criação de um Dockerfile para execução dos testes automatizados e publicação da imagem no Docker Hub.

## Repositório utilizado

https://github.com/talytam/exercicio-modulo24-api

## Imagem no Docker Hub

https://hub.docker.com/r/talytamoy/exercicio-modulo24-api

## Execução

A imagem foi criada com Node.js e configurada para executar os testes automatizados do projeto com `npm test`.

Resultado validado no container:

- 9 testes executados;
- 9 testes aprovados;
- 0 falhas.

## Imagem publicada

`talytamoy/exercicio-modulo24-api:latest`


## Executando a imagem com Pactum Flow

Para executar a imagem de testes junto ao Pactum Flow, primeiro inicie os serviços do projeto:

```bash
docker compose up -d
```

Identifique a rede criada pelo Docker Compose:

```bash
docker network ls
```

Em seguida, execute a imagem na mesma rede e informe a URL do Pactum Flow usando o nome do serviço `flows`:

```bash
docker run --rm \
  --network <nome-da-rede-do-compose> \
  -e PACTUM_FLOW_URL=http://flows:8080 \
  talytamoy/exercicio-modulo24-api:latest
```

O endereço `localhost:8080` dentro do container de testes aponta para o próprio container. Por isso, para acessar o Pactum Flow pela rede Docker, deve ser utilizado `http://flows:8080`.
