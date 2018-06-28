/**
 * Módulo de matemática de construção de software
 * @module lincond/cs2018-math
 * @author Lincon Dias
 * @version 0.0.1
 */

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

/**
 * A razão áurea pode ser obtida através da aplicação de um processo iniciado com
 * dois inteiros positivos.
 * @param {number} x fator A que será utilizado nos cálculos
 * @param {number} y fator B que será utilizado nos cálculos
 * @param {number} k precisão do resultado
 */
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

/**
 * O Crivo de Eratóstenes é um método bastante prático para encontrar os primos de 2 até um valor limite
 * @param {number[]} a array com n posições
 * @param {number} n número de posições
 */
function CrivoEratostenes(a, n){
    if ( n < 1 )
        return undefined

    let i,
        limite = Math.abs(Math.sqrt(n))
    
    for (i = 2; i <= limite; i++) {
        if ( a[i] == 0 ) {
            let multiplo = i + i
            while (multiplo <= n ){
                a[multiplo] = 1
                multiplo += i
            }
        }
    }
}

/**
 * Algoritmo eficiente para a avaliação dos polinômios na forma monômial
 * @param {number} x valor de x
 * @param {number} g grau do polinomio
 * @param {number[]} a valores dos coeficientes
 */
function Horner() {
    if ( arguments.length < 3 )
        return undefined
    let x = arguments[0],
        g = arguments[1],
        p = arguments[2]
    
    if ( g < 1 )
        return undefined

    for (let i = g - 1; i >= 0; i--) {
        p = p * x + arguments[i]
    }

    return p
}

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

    let j = parseInt(d[0]) + (2 * parseInt(d[1])) + (3 * parseInt(d[2])) + (4 * parseInt(d[3])) + (5 * parseInt(d[4])) + (6 * parseInt(d[5])) + (7 * parseInt(d[6])) + (8 * parseInt(d[7])) + (9 * parseInt(d[8]))
    let k = parseInt(d[1]) + (2 * parseInt(d[2])) + (3 * parseInt(d[3])) + (4 * parseInt(d[4])) + (5 * parseInt(d[5])) + (6 * parseInt(d[6])) + (7 * parseInt(d[7])) + (8 * parseInt(d[8])) + (9 * parseInt(d[9]))
    let dj = Mod(Mod(j, 11), 10)
    let dk = Mod(Mod(k, 11), 10)

    return dj == parseInt(d[9]) && dk == parseInt(d[10])
}

/**
 * Verifica se um CPF é válido de uma forma alternativa
 * @param {string} d array de caracteres representando os 11 digitos do CPF
 */
function CPF2(d) {
    if (d.length != 11)
        return false

    let c = 8
    let p = parseInt(d[8])
    let s = parseInt(d[8])

    for (c = 8; c >= 0; c--) {
        p += parseInt(d[c])
        s += p
    }
    let j = Mod(Mod(s, 11), 10)
    let k = Mod(Mod((9 * parseInt(d[9]) + (s - p)), 11), 10)

    console.log(j, parseInt(d[9]), k, parseInt(d[10]))

    return j == parseInt(d[9]) && k == parseInt(d[10])
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
