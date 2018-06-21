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

//TODO: documentação
function RazaoAurea(x, y, k) {
    if ( x < 0 || x > y || k < 1)
        return undefined

    let c = y,
        a = x

    for (let i = 1; i <= k; i++) {
        let t = c
        c = c + a
        a = t
    }
    return c / a
}

/**
 * Diz se um número é um quadrado perfeito
 * @param {number} n número que será testado
 */
function QuadradoPerfeito(n) {
    if ( n < 1 )
        return undefined
    
    let i = 1,
        s = 1

    for (s = 1; s < n; s++)
        i = i + 2

    return s == n
}

/**
 * Extrai a raiz quadrada de um número com uma certa precisão
 * @param {number} n número que será extraido a raiz quadrada
 * @param {number} i precisão do cálculo
 */
function Raiz(n, i) {
    if ( n < 0 )
        return undefined

    let r = 1
    for (let s = i; s >= 0; s--)
        r = ((r + n ) / r) / 2
    return r
}

/**
 * Avalia se um número é primou ou não
 * @param {number} n número que será avaliado
 */
function Primo(n) {
    if ( n < 1 )
        return undefined
    for (let i = 2; i < n; i++) {
        if ( n % i == 0 )
            return false
    }
    return true
}

//TODO: documentação
function CrivoEratostenes(a, n){
    // Exige: n > 1 e a[i] = 0 para todo 2 ≤ i ≤ n
    // i = 2
    // se a[i] = 0 então
    // a[multiplomult] = 1
    
    // fim se 
}

//TODO: Documentação
function Horner() {}
// Horner(x, g, ag, ag-1, ..., a0) Algoritmo 18
// Exige: 1 ≤ g
// p = ag 1
// i = g - 1 2
// enquanto 0 ≤ i faça 3
// p = p * x + ai 4
// i = i - 1 5
// fim enquanto 6
// retorne p



/**
 * Calcula o MDC entre dois termos utilizando o resto da divisão
 * @param {number} a termo A do MDC
 * @param {number} b termo B do MDC
 */
function MDC(a, b) {
    if ( a < b || b < 0)
        return false
    let m
    while (b != 0) {
        m = a % b
        a = b
        b = m
    }
    return a
}

/**
 * Calcula o MDC entre dois termos utilizando apenas
 * subtrações.
 * @param {number} a termo A do MDC
 * @param {number} b termo B do MDC
 */
function MDC2(a, b) {
    if ( a < b || b < 0)
        return false
    
    while( a != b ){
        if ( a > b )
            a -= b
        else
            b -= a
    }
    return a
}

/**
 * Calcula o número de fibonacci de acordo com o número de iterações
 * informado
 * @param {number} n iterações que serão feitas
 */
function Fibonacci(n) {
    if ( n < 0 )
        return false

    let a = 0
    let c = 1
    let t = 0

    if ( n == 0 || n == 1 )
        return n

    for (let i = 2; i <= n; i++) {
        t = c
        c += a
        a = t 
    }

    return c
}

/**
 * Retorna o resto inteiro de uma divisão
 * @param {number} x dividendo
 * @param {number} y divisor
 */
function Mod(x, y) {
    if ( y < 0 || x < 0)
        return undefined
    let s = x
    while (y <= s)
        s -= y
    return s
}

/**
 * Verifica se um cpf é válido ou não
 * @param {string} d array de caracateres representando os 11 digitos do CPF
 */
function CPF(d) {
    if (d.length != 11)
        return false

    let j = parseInt(d[1]) + 2 * parseInt(d[2]) + 3 * parseInt(d[3]) + 4 * d[4] + 5 * parseInt(d[5]) + 6 * parseInt(d[6]) + 7 * parseInt(d[7]) + 8 * parseInt(d[8]) + 9 * parseInt(d[9])
    let k = parseInt(d[2]) + 2 * parseInt(d[3]) + 3 * parseInt(d[4]) + 4 * d[5] + 5 * parseInt(d[6]) + 6 * parseInt(d[7]) + 7 * parseInt(d[8]) + 8 * parseInt(d[9]) + 9 * parseInt(d[10])
    let dj = Mod(Mod(j, 11), 10)
    let dk = Mod(Mod(k, 11), 10)
    console.log(dj, dk)
    return dj == d[10] && dk == d[11]
}

/**
 * Verifica se um CPF é válido de uma forma alternativa
 * @param {string} d array de caracteres representando os 11 digitos do CPF
 */
function CPF2(d) {
    if (d.length != 11)
        return false

    let c = 8
    let p = parseInt(d[9])
    let s = parseInt(d[9])

    for (c = 8; c >= 1; c--) {
        p = p + parseInt(d[c])
        s = s + p
    }
    let j = Mod(Mod(s, 11), 10)
    let k = Mod(Mod((9 * parseInt(d[10]) + (s - p)), 11), 10)
    console.log(j, k)
    return j == parseInt(d[10]) && k == parseInt(d[11])
}

module.exports = {
    'Fatorial': Fatorial,
    'Produto': Produto,
    'Potencia': Potencia,
    'Pi': Pi,
    'LogaritmoNatural': LogaritmoNatural,
    'RazaoAurea': RazaoAurea,
    'QuadradoPerfeito': QuadradoPerfeito,
    'Raiz': Raiz,
    'Primo': Primo,
    'MDC': MDC,
    'MDC2': MDC2,
    'Fibonacci': Fibonacci,
    'CPF': CPF,
    'CPF2': CPF2,
    'CrivoEratostenes': CrivoEratostenes,
    'Horner': Horner,
}
