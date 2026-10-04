const { spec, flow, reporter } = require("pactum");
const pf = require("pactum-flow-plugin");

describe("Testes de Contrato", () => {

  const urlGraphQL = "http://lojaebac.ebaconline.art.br/graphql";

  const nomeCategoria = `Categoria Contrato QA ${Date.now()}`;

  const fotoCategoria =
    "https://www.zipmaster.com/wp-content/uploads/2022/04/Reusable-Cloth-Shopping-Bags-Rainbow-Pack-200-Case-Reusable-Bags-B26-061-3-1000x1000.jpg.webp";

  let token;

  before(async () => {
    pf.config.url = process.env.PACTUM_FLOW_URL || "http://localhost:8080";
    pf.config.projectId = "exercicio-modulo24-api";
    pf.config.projectName = "Exercicio Modulo 24 API";
    pf.config.version = `1.0.${Date.now()}`;
    pf.config.username = "scanner";
    pf.config.password = "scanner";

    reporter.add(pf.reporter);

    token = await spec()
      .post("http://lojaebac.ebaconline.art.br/public/authUser")
      .withJson({
        email: "admin@admin.com",
        password: "admin123"
      })
      .returns("data.token");
  });

  after(async () => {
    await reporter.end();
  });

  it("deve validar o contrato de addCategory", async () => {
    await flow("Contrato - addCategory")
      .post(urlGraphQL)
      .withHeaders("Authorization", token)
      .withJson({
        query: `
          mutation AddCategory($name: String, $photo: String) {
            addCategory(name: $name, photo: $photo) {
              name
              photo
            }
          }
        `,
        variables: {
          name: nomeCategoria,
          photo: fotoCategoria
        }
      })
      .expectStatus(200)
      .expectJson("data.addCategory.name", nomeCategoria)
      .expectJson("data.addCategory.photo", fotoCategoria);
  });

  it("deve validar o contrato de addProduct", async () => {
  const nomeProduto = `Produto Contrato QA ${Date.now()}`;

  await flow("Contrato - addProduct")
    .post(urlGraphQL)
    .withHeaders("Authorization", token)
    .withJson({
      query: `
        mutation AddProduct(
          $name: String,
          $categories: [CategoryInput],
          $description: String,
          $price: Float,
          $specialPrice: Float,
          $photos: [String],
          $popular: Boolean,
          $quantity: Float,
          $visible: Boolean,
          $location: String,
          $additionalDetails: [String]
        ) {
          addProduct(
            name: $name,
            categories: $categories,
            description: $description,
            price: $price,
            specialPrice: $specialPrice,
            photos: $photos,
            popular: $popular,
            quantity: $quantity,
            visible: $visible,
            location: $location,
            additionalDetails: $additionalDetails
          ) {
            name
            description
            price
            quantity
            visible
          }
        }
      `,
      variables: {
        name: nomeProduto,
        categories: [],
        description: "Produto criado para teste de contrato",
        price: 100,
        specialPrice: 90,
        photos: [],
        popular: false,
        quantity: 10,
        visible: true,
        location: "Brasil",
        additionalDetails: []
      }
    })
    .expectStatus(200)
    .expectJson("data.addProduct.name", nomeProduto)
    .expectJson("data.addProduct.description", "Produto criado para teste de contrato")
    .expectJson("data.addProduct.price", 100)
    .expectJson("data.addProduct.quantity", 10)
    .expectJson("data.addProduct.visible", true);
});

});
