const encontrarIndices = require("../modulo20/desafio2-indices");

test("retorna os índices do maior e do menor valor", () => {
    expect(encontrarIndices([10, 3, 25, 7, 1])).toEqual({
        indiceMaior: 2,
        indiceMenor: 4
    });
});