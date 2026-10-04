const { spec } = require("pactum");

describe("Autenticação da API", () => {

  it("deve autenticar o usuário corretamente", async () => {
    await spec()
      .post("http://lojaebac.ebaconline.art.br/public/authUser")
      .withJson({
        email: "admin@admin.com",
        password: "admin123"
      })
      .expectStatus(200)
      .expectJson("success", true);
  });

});