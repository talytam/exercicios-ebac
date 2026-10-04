const { spec } = require("pactum");
const assert = require("assert");

describe("Serviço de Produtos", () => {

  const urlGraphQL = "http://lojaebac.ebaconline.art.br/graphql";
  const urlProdutos = "http://lojaebac.ebaconline.art.br/public/getProducts";

  const nomeProduto = `Produto QA ${Date.now()}`;
  const nomeProdutoEditado = `${nomeProduto} Editado`;

  const fotoProduto =
    "https://www.zipmaster.com/wp-content/uploads/2022/04/Reusable-Cloth-Shopping-Bags-Rainbow-Pack-200-Case-Reusable-Bags-B26-061-3-1000x1000.jpg.webp";

  let token;
  let produtoId;

  before(async () => {
    token = await spec()
      .post("http://lojaebac.ebaconline.art.br/public/authUser")
      .withJson({
        email: "admin@admin.com",
        password: "admin123"
      })
      .returns("data.token");
  });

  it("deve adicionar um produto", async () => {
    await spec()
      .post(urlGraphQL)
      .withHeaders("Authorization", token)
      .withGraphQLQuery(`
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
            specialPrice
            quantity
            popular
            visible
            location
          }
        }
      `)
      .withGraphQLVariables({
        name: nomeProduto,
        categories: [],
        description: "Produto criado pelo teste automatizado",
        price: 100,
        specialPrice: 90,
        photos: [fotoProduto],
        popular: false,
        quantity: 10,
        visible: true,
        location: "Brasil",
        additionalDetails: ["Produto de teste EBAC"]
      })
      .expectStatus(200)
      .expectJson("data.addProduct.name", nomeProduto);

    const produtos = await spec()
      .get(urlProdutos)
      .expectStatus(200)
      .returns("products");

    const produtoCriado = produtos.find(
      (produto) => produto.name === nomeProduto
    );

    assert.ok(produtoCriado, "Produto criado não foi encontrado");

    produtoId = produtoCriado._id;

    assert.strictEqual(produtoCriado.price, 100);
    assert.strictEqual(produtoCriado.quantity, 10);
  });

  it("deve editar um produto", async () => {
    await spec()
      .post(urlGraphQL)
      .withHeaders("Authorization", token)
      .withGraphQLQuery(`
        mutation EditProduct(
          $id: ID!,
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
          editProduct(
            id: $id,
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
          }
        }
      `)
      .withGraphQLVariables({
        id: produtoId,
        name: nomeProdutoEditado,
        categories: [],
        description: "Produto alterado pelo teste automatizado",
        price: 150,
        specialPrice: 120,
        photos: [fotoProduto],
        popular: true,
        quantity: 20,
        visible: true,
        location: "Brasil",
        additionalDetails: ["Produto alterado EBAC"]
      })
      .expectStatus(200);

    const produtos = await spec()
      .get(urlProdutos)
      .expectStatus(200)
      .returns("products");

    const produtoEditado = produtos.find(
      (produto) => produto._id === produtoId
    );

    assert.ok(produtoEditado, "Produto editado não foi encontrado");
    assert.strictEqual(produtoEditado.name, nomeProdutoEditado);
    assert.strictEqual(produtoEditado.price, 150);
    assert.strictEqual(produtoEditado.quantity, 20);
    assert.strictEqual(produtoEditado.popular, true);
  });

  it("deve excluir um produto", async () => {
    await spec()
      .post(urlGraphQL)
      .withHeaders("Authorization", token)
      .withGraphQLQuery(`
        mutation DeleteProduct($id: ID!) {
          deleteProduct(id: $id) {
            name
          }
        }
      `)
      .withGraphQLVariables({
        id: produtoId
      })
      .expectStatus(200);

    const produtos = await spec()
      .get(urlProdutos)
      .expectStatus(200)
      .returns("products");

    const produtoExcluido = produtos.find(
      (produto) => produto._id === produtoId
    );

    assert.strictEqual(produtoExcluido, undefined);
  });

});