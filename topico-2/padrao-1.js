let sequencia = "ola algo e o TEXTO";

let pattern = /\w+/g;
let palavras = sequencia.match(pattern);

let maior = -1;
let tamanho = 0;

palavras.forEach(function (c, i) {
    if (c.length > tamanho) {
        tamanho = c.length;
        maior = i;
    }
});

console.log(palavras[maior]);