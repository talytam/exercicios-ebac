# Módulo 24 - Automação de API

Projeto desenvolvido para o exercício do Módulo 24 da formação de Engenharia de Qualidade de Software da EBAC.

Foram implementados testes automatizados de API utilizando PactumJS, Mocha e GraphQL.

## Cenários automatizados

### Categorias

- criação;
- edição;
- exclusão.

### Produtos

- criação;
- edição;
- exclusão.

As operações GraphQL possuem validações de resposta e são conferidas também por consultas à API.

## Testes de contrato

Foram implementados testes de contrato com Pactum Flow para:

- `addCategory`;
- `addProduct`.

## Tecnologias

- Node.js
- Mocha
- PactumJS
- GraphQL
- Pactum Flow

## Execução

Instale as dependências:

```bash
npm install
```

Inicie os serviços necessários:

```bash
docker compose up -d
```

Execute:

```bash
npm test
```

O uso da imagem Docker do projeto é explorado separadamente no **Módulo 27 - Docker for Testers**.

## Resultado

A suíte possui 9 testes automatizados, contemplando autenticação, categorias, produtos e contratos.

## Evidências

### Projeto publicado no Pactum Flow

![Projeto no Pactum Flow](evidencias/01-projeto-pactum-flow.png)

### Resumo do projeto

![Resumo do projeto no Pactum Flow](evidencias/02-resumo-projeto-pactum-flow.png)

### Contratos publicados

![Flows de addCategory e addProduct](evidencias/03-flows-contratos.png)
