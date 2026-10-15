# Módulo 23 - Cypress com Intercept e App Actions

Exercício de automação do login do Hub de Leitura utilizando interceptação de requisições e App Actions.

## Cenários

- login válido com interceptação da requisição `POST /api/login`;
- login inválido com validação do status HTTP 401;
- login por App Action utilizando chamada direta à API.

Na App Action, o token e os dados retornados pela API são gravados no `localStorage` antes da abertura do dashboard, evitando a repetição do fluxo pela interface.

## Tecnologias

- Cypress
- JavaScript
- `cy.intercept()`
- `cy.request()`
- App Actions

## Pré-requisito

A aplicação Hub de Leitura deve estar disponível em:

`http://localhost:3000`

## Execução

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm test
```
