# language: pt

Funcionalidade: Login no Hub de Leitura

  Cenário: Login com credenciais válidas
    Dado que acesso a página de login
    Quando informo o e-mail "usuario@teste.com"
    E informo a senha "user123"
    E clico no botão Entrar
    Então devo ser direcionado para o dashboard

  Cenário: Login com credenciais inválidas
    Dado que acesso a página de login
    Quando informo o e-mail "usuario@teste.com"
    E informo a senha "senhaerrada"
    E clico no botão Entrar
    Então devo visualizar uma mensagem de erro de login