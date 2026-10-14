const calcularMDC = require("../modulo20/calcularMDC");

test("calcula o MDC entre dois números", () => {
    expect(calcularMDC(48, 18)).toBe(6);
});
