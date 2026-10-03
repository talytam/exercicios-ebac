const {
    Given: Dado,
    When: Quando,
    Then: Entao
} = require("@badeball/cypress-cucumber-preprocessor");

Dado("que acesso a página de login", () => {
    cy.visit("login.html");
});

Quando("informo o e-mail {string}", (email) => {
    cy.get("#email").clear().type(email);
});

Quando("informo a senha {string}", (senha) => {
    cy.get("#password").clear().type(senha);
});

Quando("clico no botão Entrar", () => {
    cy.get("#login-btn").click();
});

Entao("devo ser direcionado para o dashboard", () => {
    cy.url().should("include", "dashboard");
});

Entao("devo visualizar uma mensagem de erro de login", () => {
    cy.get("#alert-container")
        .should("be.visible")
        .and("have.class", "alert-danger");
});