# Módulo 25 - Escolhendo Linguagem e Frameworks

Exercício voltado à definição de uma estratégia de testes considerando um cenário com:

- Plataforma Web;
- Frontend em React;
- Integrações com APIs de terceiros;
- Backend em Java e .NET;
- Equipes com desenvolvimento em React Native.

## Estratégia proposta

Foram sugeridas ferramentas diferentes de acordo com a camada de teste:

- **Playwright** para testes Web end-to-end;
- **Maestro** para fluxos críticos mobile;
- **PactumJS** para testes de API;
- **Pactum Flow** para testes de contrato;
- **Jest + React Testing Library** para testes de componentes React;
- **JUnit 5 + Mockito** para testes unitários em Java;
- **xUnit + Moq** para testes unitários em .NET.

A estratégia também considera execução em pipeline CI/CD e distribuição da cobertura entre diferentes camadas, evitando concentrar toda a automação em testes end-to-end.

## Entrega

Documento completo:

[Estratégia de Testes](Estrategia-de-Testes.pdf)
