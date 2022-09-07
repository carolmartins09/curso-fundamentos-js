// 1º declara a função
// 2º executa a função 

function imprimeTexto (texto) {
    console.log(texto)
}
imprimeTexto(soma());
imprimeTexto("outro texto");

function soma() {
    return 2 + 2;
}
console.log(soma())

