function calcularMDC(a, b) {
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

console.log(calcularMDC(48, 18));

module.exports = calcularMDC;