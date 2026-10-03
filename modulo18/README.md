# Módulo 18 - Testes de Performance com JMeter

Exercício de teste de performance utilizando Apache JMeter.

## Configuração

- Endpoint: YouTube
- Usuários: 20
- Ramp-up: 60 segundos
- Duração: 3 minutos
- Massa de dados: arquivo CSV com 10 termos de busca

## Arquivos

- 	este-performance-youtube.jmx - Plano de teste do JMeter
- dados.csv - Massa de dados utilizada nas requisições

O script utiliza os termos do arquivo CSV para realizar buscas no YouTube por meio do parâmetro search_query.
