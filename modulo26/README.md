# Módulo 26 - Testes em Integração Contínua

Exercício de implementação de GitHub Actions para execução automática de testes e publicação dos resultados em GitHub Pages.

Foram utilizados dois repositórios desenvolvidos nos módulos anteriores.

## Repositório 1 - Cypress

Repositório:
https://github.com/talytam/exercicios-ebac

Testes utilizados:
Módulo 23 - Cypress com Intercept e AppActions.

GitHub Pages:
https://talytam.github.io/exercicios-ebac/

Resultado:
- 3 testes executados;
- 3 testes aprovados;
- 0 falhas.

## Repositório 2 - API

Repositório:
https://github.com/talytam/exercicio-modulo24-api

Testes utilizados:
Módulo 24 - PactumJS, GraphQL e testes de contrato.

GitHub Pages:
https://talytam.github.io/exercicio-modulo24-api/

Resultado:
- 9 testes executados;
- 9 testes aprovados;
- 0 falhas.

## Integração Contínua

As GitHub Actions foram configuradas para:

- instalar as dependências;
- preparar os serviços necessários para execução;
- executar os testes automaticamente;
- gerar relatório HTML com Mochawesome;
- publicar os resultados no GitHub Pages.
