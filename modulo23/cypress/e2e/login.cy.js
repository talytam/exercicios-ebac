
const { loginAppActions } = require("../support/appActions/login.appActions");

describe("Login no Hub de Leitura", () => {

  it("deve realizar login com sucesso usando interceptação", () => {
    cy.intercept("POST", "/api/login").as("requisicaoLogin");

    cy.visit("login.html");

    cy.get("#email").type("usuario@teste.com");
    cy.get("#password").type("user123");
    cy.get("#login-btn").click();

    cy.wait("@requisicaoLogin")
      .its("response.statusCode")
      .should("eq", 200);

    cy.url().should("include", "dashboard");
  });

  it("deve apresentar erro ao tentar login com credenciais inválidas usando interceptação", () => {
    cy.intercept("POST", "/api/login").as("requisicaoLoginInvalida");

    cy.visit("login.html");

    cy.get("#email").type("usuario@teste.com");
    cy.get("#password").type("senhaerrada");
    cy.get("#login-btn").click();

    cy.wait("@requisicaoLoginInvalida")
      .its("response.statusCode")
      .should("eq", 401);

    cy.get("#alert-container")
      .should("be.visible")
      .and("have.class", "alert-danger");
  });

  it("deve realizar login usando AppActions", () => {
  loginAppActions.realizarLogin(
    "usuario@teste.com",
    "user123"
  );

  cy.url().should("include", "dashboard");
});

});