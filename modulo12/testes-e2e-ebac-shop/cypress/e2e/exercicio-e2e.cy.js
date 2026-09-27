/// <reference types="cypress" />
import dadoscheckoutPage, { DadosCheckoutPage } from '../support/page_objects/dadoscheckout.page';
const dadosCheckout = require ('../fixtures/dadoscheckout.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Navegar até a página de produtos
        cy.get('#primary-menu > .menu-item-629 > a').click()

        //Selecionar 4 produtos 
        cy.addprodutos('Abominable Hoodie', 'S', 'Blue', 4)

        //Adicionar ao carrinho
        cy.get('.single_add_to_cart_button').click()

        //Fazer ckeckout
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        //Preencher todas as opções no checkout
        dadoscheckoutPage.AdicionarDados(
            dadosCheckout[2].nome,
            dadosCheckout[2].sobrenome,
            dadosCheckout[2].empresa,
            dadosCheckout[2].pais,
            dadosCheckout[2].endereco,
            dadosCheckout[2].complemento,
            dadosCheckout[2].cidade,
            dadosCheckout[2].estado,
            dadosCheckout[2].cep,
            dadosCheckout[2].telefone,
            dadosCheckout[2].email
        )

        //Validar compra
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
     });


})
