# Exercício Módulo 28 - Testes de Performance

Projeto desenvolvido para o exercício do **Módulo 28 - Testes de Performance** do curso de **Engenharia de Qualidade de Software da EBAC**.

Foram implementados testes de performance utilizando **k6** sobre a API `ebac-demo-store-server`, contemplando os endpoints de **Produtos** e **Clientes**.

## Cenários de teste

### Produtos

O cenário realiza autenticação na API e executa requisições de consulta ao endpoint de Produtos.

Foram validados:

- autenticação realizada com sucesso;
- retorno HTTP `200`;
- tempo individual de resposta inferior a 1 segundo;
- taxa de falhas HTTP inferior a 1%;
- 95% das requisições concluídas em menos de 1 segundo.

### Clientes

O cenário realiza autenticação na API e executa requisições de consulta ao endpoint de Clientes.

Foram validados:

- autenticação realizada com sucesso;
- retorno HTTP `200`;
- tempo individual de resposta inferior a 1 segundo;
- taxa de falhas HTTP inferior a 1%;
- 95% das requisições concluídas em menos de 1 segundo.

## Tecnologias utilizadas

- k6
- JavaScript
- Node.js
- Docker
- API REST

## Configuração de carga

Os dois cenários foram executados com a seguinte configuração:

- **Usuários virtuais (VUs):** 10
- **Duração:** 30 segundos
- **Intervalo entre iterações:** 1 segundo
- **Threshold de falhas HTTP:** menor que 1%
- **Threshold de duração:** p95 menor que 1 segundo

## Estrutura do projeto

```text
.
├── README.md
├── performance
│   ├── clientes.js
│   └── produtos.js
└── evidencias
    ├── 01-teste-performance-produtos.png
    └── 02-teste-performance-clientes.png
```

## Pré-requisitos

Para execução dos testes é necessário possuir:

- k6 instalado;
- Node.js;
- Docker;
- API `ebac-demo-store-server` executando localmente.

A API deve estar disponível em:

```text
http://localhost:3000
```

## Executando os testes

### Produtos

```bash
k6 run performance/produtos.js
```

### Clientes

```bash
k6 run performance/clientes.js
```

## Resultados

### Produtos

O cenário de Produtos foi executado com sucesso.

| Métrica | Resultado |
| --- | --- |
| Usuários virtuais | 10 |
| Duração | 30 segundos |
| Iterações | 300 |
| Requisições HTTP | 301 |
| Checks aprovados | 601 de 601 |
| Falhas HTTP | 0,00% |
| p95 | 23,55 ms |
| Threshold p95 | Aprovado |
| Threshold de falhas | Aprovado |

### Clientes

O cenário de Clientes também foi executado com sucesso.

| Métrica | Resultado |
| --- | --- |
| Usuários virtuais | 10 |
| Duração | 30 segundos |
| Iterações | 300 |
| Requisições HTTP | 301 |
| Checks aprovados | 601 de 601 |
| Falhas HTTP | 0,00% |
| p95 | 29,79 ms |
| Threshold p95 | Aprovado |
| Threshold de falhas | Aprovado |

## Conclusão

Os testes de performance dos endpoints de **Produtos** e **Clientes** foram executados sem falhas.

Nos dois cenários, **100% dos checks foram aprovados**, a taxa de falhas HTTP permaneceu em **0,00%** e o tempo de resposta no percentil 95 ficou significativamente abaixo do limite definido de 1 segundo.

Os resultados demonstram que, sob a carga aplicada neste exercício, os endpoints atenderam aos critérios de performance estabelecidos.

## Evidências

### Produtos

![Resultado do teste de performance de Produtos](evidencias/01-teste-performance-produtos.png)

### Clientes

![Resultado do teste de performance de Clientes](evidencias/02-teste-performance-clientes.png)