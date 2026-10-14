# Módulo 30 - Testes Mobile em CI

Exercício de integração dos testes mobile do módulo anterior com GitHub Actions e BrowserStack.

## Fluxo executado no CI

- upload do app iOS para o BrowserStack;
- criação da sessão em dispositivo iOS;
- abertura do app Loja EBAC;
- autenticação com usuário de teste;
- validação da Home após o login.

O fluxo completo de checkout desenvolvido no módulo 29 continua disponível no projeto em `test/specs/checkout.test.js`.

## Tecnologias

- Appium
- WebdriverIO
- XCUITest
- BrowserStack
- GitHub Actions

## Execução no GitHub Actions

O workflow está na raiz do repositório, no caminho:

`.github/workflows/modulo30-ci.yml`

Os comandos do pipeline são executados dentro da pasta `modulo30`, mantendo os arquivos do exercício organizados sem impedir o reconhecimento do workflow pelo GitHub Actions.

Ele é executado em pushes para a branch `ci` e também pode ser iniciado manualmente pela aba **Actions** do GitHub.

As credenciais necessárias são armazenadas em GitHub Secrets.

## Observação

Durante a adaptação do fluxo completo para o Device Farm, o app Loja EBAC apresentou instabilidade no carregamento de produtos e no carrinho. Para a atividade de CI, o workflow executa uma validação estável de autenticação no dispositivo iOS, comprovando a integração entre GitHub Actions, Appium/WebdriverIO e BrowserStack.

O BrowserStack grava o vídeo da sessão executada, que pode ser utilizado como evidência da atividade.


## Evidência

Vídeo da execução do teste iOS no BrowserStack: `evidencias/execucao-browserstack.mp4`.
