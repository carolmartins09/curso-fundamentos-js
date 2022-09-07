// == (comparação implicita) -> compara valor
// === (comparação explicita) -> compara valor e tipo de dado


const numero = 5;
const texto = "5";

console.log(numero == texto)   // true
console.log(numero === texto)  // false

//typeof
console.log(typeof numero)  // number
console.log(typeof texto)   // string

// boas práticas: utilizar sempre '===' - caso seja necessária a conversão, realizar conversão explícita

Number()
String()
