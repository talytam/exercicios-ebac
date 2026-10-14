const loginAppActions = {

  realizarLogin(email, senha) {
    cy.request({
      method: "POST",
      url: "/api/login",
      body: {
        email,
        password: senha
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.token).to.exist;

      cy.visit("dashboard.html", {
        onBeforeLoad(win) {
          win.localStorage.setItem("authToken", response.body.token);
          win.localStorage.setItem("userId", String(response.body.id));
          win.localStorage.setItem("userName", response.body.name);
          win.localStorage.setItem("isAdmin", String(response.body.isAdmin));
        }
      });
    });
  }

};

module.exports = { loginAppActions };
