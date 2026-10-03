function encontrarIndices(valores) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < valores.length; i++) {
        if (valores[i] > valores[indiceMaior]) {
            indiceMaior = i;
        }

        if (valores[i] < valores[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return {
        indiceMaior,
        indiceMenor
    };
}

const numeros = [10, 3, 25, 7, 1];

console.log(encontrarIndices(numeros));