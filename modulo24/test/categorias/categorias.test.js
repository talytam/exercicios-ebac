const { spec } = require("pactum");
const assert = require("assert");

describe("Serviço de Categorias", () => {

  const urlGraphQL = "http://lojaebac.ebaconline.art.br/graphql";
  const urlCategorias = "http://lojaebac.ebaconline.art.br/public/getCategories";

  const nomeCategoria = `Categoria QA ${Date.now()}`;
  const nomeCategoriaEditada = `${nomeCategoria} Editada`;

  const fotoCategoria =
    "https://www.zipmaster.com/wp-content/uploads/2022/04/Reusable-Cloth-Shopping-Bags-Rainbow-Pack-200-Case-Reusable-Bags-B26-061-3-1000x1000.jpg.webp";

  let token;
  let categoriaId;

  before(async () => {
    token = await spec()
      .post("http://lojaebac.ebaconline.art.br/public/authUser")
      .withJson({
        email: "admin@admin.com",
        password: "admin123"
      })
      .returns("data.token");
  });

  it("deve adicionar uma categoria", async () => {
    await spec()
      .post(urlGraphQL)
      .withHeaders("Authorization", token)
      .withGraphQLQuery(`
        mutation AddCategory($name: String, $photo: String) {
          addCategory(name: $name, photo: $photo) {
            name
            photo
          }
        }
      `)
      .withGraphQLVariables({
        name: nomeCategoria,
        photo: fotoCategoria
      })
      .expectStatus(200)
      .expectJson("data.addCategory.name", nomeCategoria)
      .expectJson("data.addCategory.photo", fotoCategoria);

    const categorias = await spec()
      .get(urlCategorias)
      .expectStatus(200)
      .returns("categories");

    const categoriaCriada = categorias.find(
      (categoria) => categoria.name === nomeCategoria
    );

    assert.ok(categoriaCriada, "Categoria criada não foi encontrada");

    categoriaId = categoriaCriada._id;
  });

  it("deve editar uma categoria", async () => {
    await spec()
      .post(urlGraphQL)
      .withHeaders("Authorization", token)
      .withGraphQLQuery(`
        mutation EditCategory($id: ID!, $name: String, $photo: String) {
          editCategory(id: $id, name: $name, photo: $photo) {
            name
            photo
          }
        }
      `)
      .withGraphQLVariables({
        id: categoriaId,
        name: nomeCategoriaEditada,
        photo: fotoCategoria
      })
      .expectStatus(200);

    const categorias = await spec()
      .get(urlCategorias)
      .expectStatus(200)
      .returns("categories");

    const categoriaEditada = categorias.find(
      (categoria) => categoria._id === categoriaId
    );

    assert.ok(categoriaEditada, "Categoria editada não foi encontrada");
    assert.strictEqual(categoriaEditada.name, nomeCategoriaEditada);
    assert.strictEqual(categoriaEditada.photo, fotoCategoria);
  });

  it("deve excluir uma categoria", async () => {
    await spec()
      .post(urlGraphQL)
      .withHeaders("Authorization", token)
      .withGraphQLQuery(`
        mutation DeleteCategory($id: ID!) {
          deleteCategory(id: $id) {
            name
            photo
          }
        }
      `)
      .withGraphQLVariables({
        id: categoriaId
      })
      .expectStatus(200);

    const categorias = await spec()
      .get(urlCategorias)
      .expectStatus(200)
      .returns("categories");

    const categoriaExcluida = categorias.find(
      (categoria) => categoria._id === categoriaId
    );

    assert.strictEqual(categoriaExcluida, undefined);
  });

});