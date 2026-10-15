# Exercício Módulo 24 - Automação de API

Projeto desenvolvido para o exercício do Módulo 24 do curso de Engenharia de Qualidade de Software da EBAC.

Foram implementados testes automatizados de API utilizando PactumJS, Mocha e GraphQL.

## Cenários automatizados

### Categorias
- addCategory
- editCategory
- deleteCategory

### Produtos
- addProduct
- editProduct
- deleteProduct

## Testes de contrato

Foram implementados testes de contrato utilizando Pactum Flow para:

- addCategory
- addProduct

## Tecnologias utilizadas

- Node.js
- Mocha
- PactumJS
- GraphQL
- Pactum Flow
- Docker

## Executando o projeto

Instale as dependências:

```bash
npm install
```

Inicie os serviços do Pactum Flow e MongoDB com Docker:

```bash
docker compose up -d
```

Execute os testes:

```bash
npm test
```

Para visualizar os contratos publicados no Pactum Flow:

```text
http://localhost:8080/#/projects
```

## Executando a imagem Docker com Pactum Flow

A imagem publicada no Docker Hub pode ser executada junto aos serviços definidos no `docker-compose.yml`.

Primeiro, inicie o Pactum Flow e o MongoDB:

```bash
docker compose up -d
```

Identifique o nome da rede criada pelo Docker Compose:

```bash
docker network ls
```

Depois, execute a imagem de testes na mesma rede, informando a URL do Pactum Flow pelo nome do serviço `flows`:

```bash
docker run --rm \
  --network <nome-da-rede-do-compose> \
  -e PACTUM_FLOW_URL=http://flows:8080 \
  talytamoy/exercicio-modulo24-api:latest
```

Dentro do container de testes, `localhost:8080` apontaria para o próprio container. Por isso, a comunicação com o Pactum Flow deve utilizar `http://flows:8080`, aproveitando a resolução de nomes da rede do Docker Compose.

## Resultado

A suíte completa possui 9 testes automatizados, contemplando autenticação, categorias, produtos e contratos.

## Evidências

### Projeto publicado no Pactum Flow

![Projeto no Pactum Flow](evidencias/01-projeto-pactum-flow.png)

### Resumo do projeto

![Resumo do projeto no Pactum Flow](evidencias/02-resumo-projeto-pactum-flow.png)

### Contratos publicados

![Flows de addCategory e addProduct](evidencias/03-flows-contratos.png)
