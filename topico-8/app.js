/**
 * Calcula o fatorial de um número
 * @param {number} n número inteiro maior do que 0
 */
function Fatorial(n) {
    if ( n < 1 )
        return undefined
    
    let f = 1
    for (let i = 1; i <= n; i++)
        f = f * i
    return f
}

/**
 * Calcula o resultado do produto de dois inteiros usando apenas
 * soma.
 * @param {number} a inteiro positivo A
 * @param {number} b inteiro positivo B
 * @return {*} resultado do produto dos dois inteiros ou undefined caso
 * os parâmetros sejam inválidos.
 */
function Produto(a, b) {
    if ( a < 0 || b < 0)
        return undefined

    let totalParcelas = a
    let parcela = b

    if ( b < a ) {
        totalParcelas = b
        parcela = a
    }

    let s = 0
    for (let i = 1; i <= totalParcelas; i++) 
        s += parcela
    return s
}

/**
 * Implementa potência usando apenas somas
 * @param {number} x base
 * @param {number} y expoente
 */
function Potencia(x, y) {
    if ( x < 0 || y < 0 )
        return undefined
    
    let potencia = 1

    for (let i = 1; i <= y; i++) 
        potencia = Produto(potencia, x)
    return potencia
}

/**
 * Retorna o valor de Pi
 * @param {number} n limite para a quantidade de termos do somatório
 */
function Pi(n) {
    if ( n < 1 )
        return undefined

    let s = -1,
        d = -1,
        p = 0

    for (let i = 1; i <= n; i++) {
        d = d + 2 
        s = -1 * s 
        p = p + 4 * s / d 
    }
    return p
}

/**
 * Calcula o logaritmo natural
 * @param {number} n numerador
 * @param {number} k quantidade de termos empregados no somatório
 */
function LogaritmoNatural(n, k) {
    if ( n < 1 || k < 2 )
        return undefined
    let e = 1 + n,
        numerador = n,
        denominador = 1
    for (let i = 2; i <= k; i++) {
        numerador = numerador * numerador 
        denominador = denominador * i 
        e = e + numerador / denominador 
    }
    return e
}

module.exports = {
    'Fatorial': Fatorial,
    'Produto': Produto,
    'Potencia': Potencia,
    'Pi': Pi,
    'LogaritmoNatural': LogaritmoNatural,
}
