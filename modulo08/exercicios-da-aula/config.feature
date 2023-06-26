            #language: pt

            Funcionalidade: Configuração de produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Contexto:
            Dado que estou navegando na página do produto que desejo configurar na EBAC-SHOP*

            Cenário: 1- Configuração de cor, tamanho e quantidade obrigatórios
            Quando eu selecionar uma cor, tamanho e quantidade
            Então o produto deve ser configurado com as opções selecionadas

            Esquema do Cenário: Configuração de cor, tamanho e quantidade
            Quando eu acessar meu <produto>
            Então deve exibir as opções de configuração <cor> <tamanho> <quantidade>

            Exemplos:
            | produto  | cor      | tamanho | quantidade |
            | jaqueta  | azul     | P       | 2          |
            | camiseta | preto    | M       | 5          |
            | calça    | rosa     | G       | 10         |
            | vestido  | vermelho | GG      | 9          |
            | saia     | verde    | XGG     | 4          |

            Cenário: 2- Limitação de 10 produtos por venda
            Quando eu escolher uma quantidade acima de 10 produtos
            Então deve ser exibido a mensagem de limitação de produtos: "Desculpe! máximo de 10 produtos por venda"

            Esquema do Cenário: Limitação de 10 produtos por venda
            Quando eu escolher uma <quantidade> acima de 10 produtos
            Então deve ser exibido a <mensagem> de limitação de produtos

            Exemplos:
            | quantidade | mensagem                                    |
            | 11         | "Desculpe! máximo de 10 produtos por venda" |
            | 25         | "Desculpe! máximo de 10 produtos por venda" |
            | 33         | "Desculpe! máximo de 10 produtos por venda" |
            | 51         | "Desculpe! máximo de 10 produtos por venda" |
            | 64         | "Desculpe! máximo de 10 produtos por venda" |

            Cenário: 3- Limpar as configurações do produto
            Quando eu clicar no botão "Limpar"
            Então todas as configurações do produto devem ser limpas

            Esquema do Cenário: Limpar as configurações do produto
            Quando eu clicar no botão <limpar>
            Então as configurações devem ser limpas



