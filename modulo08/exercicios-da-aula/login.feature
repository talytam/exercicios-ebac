            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu sou um cliente cadastrado na EBAC-SHOP*

            Cenário: 1- Autententicação com dados válidos e checkout
            Quando eu digitar o usuário "joao_silva@abc.com.br"
            E a senha "abc123"
            Então devo ser direcionado para a tela de checkout

            Esquema do Cenário: Autententicação com dados válidos e checkout
            Quando eu digitar o <usuario>
            E a <senha>
            Então devo ser direcionado para a tela de checkout

            Cenário: 2- Autententicação com dados inválidos e checkout
            Quando eu digitar o usuário "jose_silva@abc.com.br"
            E a senha "123abc"
            Então deve ser exibido a mensagem de alerta "Usuário ou senha inválidos"

            Esquema do Cenário: Autententicação com dados inválidos e checkout
            Quando eu digitar o <usuario>
            E a <senha>
            Então deve ser exibido a <mensagem> de alerta 

            Exemplos:
            | usuario                    | senha  | mensagem                     |
            | "josue_silva@abc.com.br"   | "abc123" | "Usuário ou senha inválidos" |
            | "mariasouza@abc.com.br"    | "123abc" | "Usuário ou senha inválidos" |
            | "miguelarcanjo@abc.com.br" | "12345"  | "Usuário ou senha inválidos" |

