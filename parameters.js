let num1 = 2;
let num2 = 3;

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(num1, num2))
console.log(soma(2, 2))
console.log(soma(10, -3))

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`
}

console.log(nomeIdade(40, "Juliana"))  //ordem dos parâmetros invertida

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))
console.log(multiplica(soma(4, 5), soma(num1, num2)))
console.log(multiplica(4)) // NaN -> falta um parâmetro

function multiplica2(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica2(9))

/*os argumentos de uma função podem se repetir em outras funções pois, 
só funcionam dentro da mesma (ex: numero1 e numero2)*/


