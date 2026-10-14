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

## Pré-requisitos

- Node.js instalado;
- Android Studio configurado;
- Appium e UiAutomator2 disponíveis no projeto;
- Emulador Android configurado.

### Emulador utilizado

- Nome: `ebac`
- Android: `15.0`

Caso utilize outro emulador, ajuste `appium:deviceName` e `appium:platformVersion` no arquivo:

`config/wdio.android.app.conf.ts`

### Aplicativo

O arquivo APK deve ser colocado no seguinte caminho:

`apps/android.wdio.native.app.v2.2.0.apk`

A pasta `apps/` não é versionada no repositório.

## Execução

Instale as dependências:

```bash
npm install
```

Com o emulador Android iniciado, execute:

```bash
npm run android.app
```
