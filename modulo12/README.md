# Módulo 12 - Testes End-to-End com Cypress

Exercício de automação de um fluxo de compra ponta a ponta na EBAC Shop.

## Fluxo automatizado

O cenário principal contempla:

- acesso à loja;
- seleção de produto;
- adição ao carrinho;
- acesso ao checkout;
- preenchimento dos dados de compra;
- finalização do pedido;
- validação da confirmação da compra.

O módulo também contém testes de login utilizando comandos customizados e dados de fixture.

## Estrutura

Foi utilizado Page Object para concentrar o preenchimento dos dados de checkout, além de fixtures para massa de dados.

## Tecnologias

- Cypress
- JavaScript
- Faker
- Page Object
- Fixtures

## Execução

Instale as dependências:

```bash
npm install
```

Execute em modo headless:

```bash
npm run cy:run
```

Ou abra a interface do Cypress:

```bash
npm run cy:open
```
