
const ERRO_CARACTER_INVALIDO = 'Caracteres inválidos'
const ERRO_TIPO_INVALIDO = 'Tipo inválido de parâmetro'

/**
 * Recebe uma sequência de caracteres e produz na saída uma sequência
 * contendo apenas as letras, sem os espaços, mas em ordem alfabética.
 * 
 * @param {string} str sequência de caracteres, apenas letras [a-z], além de espaço em branco
 */
function sopaDeLetras(str) {
    if (typeof str !== 'string')
        throw Error(ERRO_TIPO_INVALIDO)

    let letras = str.split('');
    letras.forEach(c => {
        if ( (c < 'a' ||  c > 'z' ) && c != ' ' )
            throw Error(ERRO_CARACTER_INVALIDO)
    });

    if (str.length < 1)
        throw Error(ERRO_CARACTER_INVALIDO)

    if (str.length == 1)
        return str

    letras = letras.sort();
    letras = letras.filter( c => { return c != ' '; } );
    return letras.join('');
}

// console.log(sopaDeLetras(''))

exports.sopaDeLetras = sopaDeLetras;
exports.ERRO_CARACTER_INVALIDO = ERRO_CARACTER_INVALIDO
exports.ERRO_TIPO_INVALIDO = ERRO_TIPO_INVALIDO
