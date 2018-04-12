function propriedade(sequencia) {
    var i = sequencia.length;
    while (i--) {
        if (letra(sequencia.charAt(i))) {
            if (!asterisco(sequencia, i - 1) || !asterisco(sequencia, i + 1)) {
                return false;
            }
        }
    }
    
    return true;
}

function letra(caractere) {
    let supostaLetra = caractere.toString();
    return supostaLetra.length == 1 && supostaLetra.match(/[a-z]/);
}

function asterisco(sequencia, posicao) {
    if (posicao < 0 || posicao >= sequencia.length) {
        return false;
    }
    
    return sequencia.charAt(posicao) == '*';
}

console.log(propriedade("*a*"));
console.log(propriedade("a*"));
console.log(propriedade("*******b*a*"));