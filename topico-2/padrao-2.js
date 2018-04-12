let sequencia = "ola algo e o TEXTO";

function palavraMaisExtensa(sen) {
    return sen.match(/\w+/g).sort(function(a,b) {return b.length - a.length;})[0];
}

console.log(palavraMaisExtensa(sequencia));