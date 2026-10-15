# Módulo 22 - Cypress com BDD e Gherkin

Exercício de automação do fluxo de login do Hub de Leitura utilizando Cypress com cenários escritos em Gherkin.

## Cenários

- login com credenciais válidas;
- login com credenciais inválidas e validação da mensagem de erro.

Os passos definidos no arquivo `login.js` são reutilizados pelos cenários da feature.

## Tecnologias

- Cypress
- Gherkin
- Cucumber Preprocessor
- JavaScript

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
