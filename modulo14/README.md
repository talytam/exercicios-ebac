# Módulo 14 - Testes Automatizados de API REST

Exercício de automação de testes de API com Cypress sobre o Serverest.

## Cobertura

Os testes contemplam:

- autenticação;
- listagem, cadastro, edição e exclusão de usuários;
- cenários de usuário duplicado;
- listagem, cadastro, edição e exclusão de produtos;
- cenário de produto duplicado;
- validação de contratos de usuários e produtos.

## Tecnologias

- Cypress
- JavaScript
- Serverest
- Joi
- Mochawesome

## Execução

Instale as dependências:

```bash
npm install
```

Inicie a API:

```bash
npm start
```

Em outro terminal, execute:

```bash
npm run cy:run
```

O projeto também possui configuração para geração de relatórios com Mochawesome.
