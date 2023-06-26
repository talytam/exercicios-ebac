            #language: pt

            Funcionalidade: Conclusão de cadastro
            Como cliente da EBAC-SHOP
            Quero fazer concluir meu cadastro
            Para finalizar minha compra

            Contexto:
            Dado que eu sou um cliente na EBAC-SHOP*

            Cenário: 1- Conclusão com sucesso
            Quando eu preencher todos os dados obrigatórios
            E clicar no botão "Concluir Cadastro"
            Então serei direcionado para a finalização da compra

            Esquema do Cenário: Conclusão com sucesso
            Quando eu preencher todos os <dados> obrigatórios
            E clicar no botão "Concluir Cadastro"
            Então serei direcionado para a finalização da compra

            Cenário: 2- Conclusão com e-mail inválido
            Quando eu preencher a area e-mail com formato errado
            Então deve ser exibido a mensagem de erro "Formato de e-mail inválido"

            Esquema do Cenário: Conclusão com e-mail inválido
            Quando eu preencher a area de <e-mail> com formato errado
            Então deve ser exibido a <mensagem> de erro

            Exemplos:
            | e-mail           | mensagem                     |
            | "maria.com.br"   | "Formato de e-mail inválido" |
            | "jose@alba"      | "Formato de e-mail inválido" |
            | "joaquim@abc.br" | "Formato de e-mail inválido" |

            Cenário: 3- Conclusão com campos obrigatórios vazios
            Quando eu não preencher os dados obrigatórios
            E tentar concluir meu cadastro
            Então deve ser exibido a mensagem de alerta "Por favor, preencha os campos obrigatórios (com asterisco)"

            Esquema do Cenário: Conclusão com campos obrigatórios vazios
            Quando eu tentar concluir meu cadastro
            E não preencher os <campos> obrigatórios
            Então deve ser exibido a <mensagem> de alerta

            Exemplos:
            | campos     | mensagem                                                     |
            | Nome*      | "Por favor, preencha os campos obrigatórios (com asterisco)" |
            | Sobrenome* | "Por favor, preencha os campos obrigatórios (com asterisco)" |
            | País*      | "Por favor, preencha os campos obrigatórios (com asterisco)" |



