# Módulo 29 - Testes iOS

Exercício de automação do fluxo de compra no app Loja EBAC para iOS.

## Fluxo implementado para automação

- login;
- acesso à área Browse;
- seleção de produto disponível;
- adição ao carrinho;
- cadastro de endereço, quando necessário;
- pagamento;
- checkout;
- validação da compra concluída.

## Tecnologias

- Appium
- WebdriverIO
- XCUITest
- Sauce Labs

## Execução

Crie um arquivo `.env` a partir do `.env.example`, preencha as credenciais e execute:

```bash
npm install
npm test
```

## Observação

Durante os testes no Sauce Labs, foi possível validar a instalação do app, a inicialização da sessão e o login automatizado. O fluxo completo de compra também foi validado manualmente até a confirmação da transação.

A execução automatizada ponta a ponta no Sauce Labs não pôde ser concluída devido à indisponibilidade de concorrência para dispositivos iOS na conta utilizada (`rds = 0` e `mac_vms = 0` no nível da organização).
