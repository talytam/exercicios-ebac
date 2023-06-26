            #language: pt

            Funcionalidade: Calculadora
            Como não sei fazer conta de cabeça
            Quero usar a calculadora do sistema
            Para somar dois números

            Cenário: Soma de dois números
            Dado que eu acesse a calculadora
            Quando eu somar 2+2
            Então o resultado deve ser 4

            Esquema do Cenário: Soma de 2 números
            Quando eu somar <numero1> com <numero2>
            Então o resultado deve ser <resultado>

            Exemplos:
            | numero1 | numero2 | resultado |
            | 1       | 1       | 2         |
            | 2       | 2       | 4         |
            | 5       | 4       | 9         |
            | 10      | 10      | 20        |
            | 15      | 20      | 35        |
            | 20      | 65      | 85        |
            | 30      | 72      | 102       |
            | 48      | 79      | 127       |
            | 54      | 81      | 135       |
            | 69      | 66      | 135       |
            | 125     | 77      | 202       |
            | 163     | 65      | 228       |
            | 205     | 25      | 230       |
            | 254     | 52      | 306       |
            | 244     | 43      | 287       |
            | 588     | 98      | 676       |
            | 358     | 222     | 580       |
            | 647     | 455     | 1102      |
            | 98      | 2023    | 2121      |
            | 2023    | 2023    | 4046      |






