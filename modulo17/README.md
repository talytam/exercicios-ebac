# Módulo 17 - Automação Mobile com Appium

Exercício desenvolvido durante o curso de Engenharia de Qualidade de Software da EBAC.

## Objetivo

Automatizar um fluxo funcional em uma aplicação Android utilizando Appium e WebdriverIO.

Neste exercício foi automatizado o fluxo de **login com sucesso** no WebdriverIO Native Demo App.

## Tecnologias utilizadas

- Appium
- WebdriverIO
- TypeScript
- UiAutomator2
- Android Studio
- Android Emulator

## Cenário automatizado

**Login com sucesso**

1. Acessar a área de Login.
2. Informar e-mail válido.
3. Informar senha válida.
4. Acionar o botão de Login.
5. Validar a apresentação da mensagem de sucesso.

## Estrutura

O projeto utiliza o padrão **Screen Object** para separar as interações com a interface da implementação do cenário de teste.

Os elementos da tela são localizados principalmente através de **Accessibility ID**.

## Execução

Com o emulador Android iniciado, execute:

```bash
npx wdio run ./config/wdio.android.app.conf.ts --spec ../tests/specs/app.login.spec.ts