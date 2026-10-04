# Análise das Métricas - Cypress Cloud

## Objetivo

Analisar as métricas geradas pelas execuções dos testes automatizados dos módulos 22 e 23 no Cypress Cloud.

## Módulo 22 - Teste EBAC UI

A execução analisada apresentou 2 testes executados, com 2 aprovações e nenhuma falha. O tempo total informado para a suíte foi de aproximadamente 4 segundos.

Com base nessa execução, a taxa de sucesso foi de 100%.

O resultado indica que os cenários de login definidos no projeto foram executados sem erros na execução registrada. Como não houve falhas, não foram gerados dados relevantes para métricas como Top Failures, Most Common Errors ou Flaky Tests.

A suíte possui apenas 2 testes, portanto os dados ainda representam uma amostra pequena. Para identificar tendências de estabilidade, regressões ou aumento de duração, seriam necessárias mais execuções ao longo do tempo.

Projeto:
https://cloud.cypress.io/projects/9qq4en

Execução analisada:
https://cloud.cypress.io/projects/9qq4en/runs/2

## Módulo 23 - Teste EBAC API

A execução analisada apresentou 3 testes executados, com 3 aprovações e nenhuma falha. O tempo total informado para a suíte também foi de aproximadamente 4 segundos.

A taxa de sucesso foi de 100%.

Os testes validam o fluxo de login e também utilizam interceptação de requisições para conferir respostas da API durante a execução da interface. Nesta execução, todos os cenários concluíram com sucesso.

Assim como no módulo 22, não houve falhas ou comportamento instável registrado. Por isso, métricas relacionadas a erros recorrentes, falhas mais frequentes e testes flaky ainda não possuem dados suficientes para análise.

Projeto:
https://cloud.cypress.io/projects/twwwd7

Execução analisada:
https://cloud.cypress.io/projects/twwwd7/runs/1

## Comparação das execuções

| Métrica | Módulo 22 | Módulo 23 |
| --- | ---: | ---: |
| Testes executados | 2 | 3 |
| Testes aprovados | 2 | 3 |
| Testes com falha | 0 | 0 |
| Taxa de sucesso | 100% | 100% |
| Duração aproximada | 4s | 4s |

As duas suítes apresentaram resultado estável na execução analisada, sem falhas e com tempo de execução baixo.

O módulo 23 possui uma quantidade maior de testes, mas manteve duração semelhante à do módulo 22. Considerando apenas essas execuções, não foi identificado impacto relevante de desempenho decorrente do aumento da quantidade de cenários.

## Conclusão

As execuções registradas no Cypress Cloud apresentaram 100% de sucesso nos dois projetos.

O Cypress Cloud permite acompanhar informações como quantidade de testes, status das execuções, duração, falhas recorrentes, erros comuns e testes instáveis. Neste exercício, como as execuções não apresentaram falhas, os principais dados disponíveis para análise foram quantidade de testes, taxa de sucesso e duração.

A ausência de falhas é positiva para as execuções realizadas, mas uma única execução de cada projeto não é suficiente para concluir que as suítes são totalmente estáveis. O acompanhamento contínuo de novas execuções permitiria observar tendências, identificar aumento de tempo, reincidência de erros e possíveis testes flaky.
