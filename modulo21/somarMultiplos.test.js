const somarMultiplos = require("../modulo20/somarMultiplos");

test("soma os múltiplos de 5 ou 7 abaixo de 1000", () => {
    expect(somarMultiplos()).toBe(156361);
});
