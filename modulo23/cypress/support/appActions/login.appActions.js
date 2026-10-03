const loginAppActions = {

  realizarLogin(email, senha) {
    cy.visit("login.html");

    cy.get("#email").clear().type(email);
    cy.get("#password").clear().type(senha);
    cy.get("#login-btn").click();
  }

};

module.exports = { loginAppActions };