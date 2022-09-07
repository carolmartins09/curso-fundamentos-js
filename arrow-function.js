function apresentacao(nome1) {
    return `Meu nome é ${nome1}`;
}

console.log(apresentacao("Carol"))

//Arrow function
const apresentacaoArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentacaoArrow("Renan"))
console.log(soma(2, 3))

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(12, 15))
console.log(somaNumerosPequenos(5, 3))