# Módulo 15 - DevOps e Automação com Jenkins

Exercício de integração dos testes Web com um pipeline Jenkins.

## Testes utilizados

A suíte Cypress contempla fluxos da EBAC Shop relacionados a:

- login;
- pré-cadastro;
- produtos e carrinho;
- endereços de faturamento e entrega.

O projeto utiliza fixtures, comandos customizados e Page Object em parte dos cenários.

## Integração contínua

O arquivo `Jenkinsfile` define um pipeline com etapas para:

- obter o projeto;
- instalar as dependências;
- executar a suíte Cypress.

## Tecnologias

- Cypress
- JavaScript
- Jenkins
- Faker

## Execução local

Instale as dependências:

```bash
npm install
```

Execute os testes:

```bash
npm run cy:run
```
