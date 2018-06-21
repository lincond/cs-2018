const lib = require('../app')

// Fatorial
QUnit.test('Fatorial de 1',  assert => assert.equal(lib.Fatorial(1), 1))
QUnit.test('Fatorial de 5',  assert => assert.equal(lib.Fatorial(5), 120))
QUnit.test('Fatorial de -1',  assert => assert.equal(lib.Fatorial(-1), undefined))

// Produto
QUnit.test('Produto de 1', assert => assert.equal(lib.Produto(1, 1), 1))
QUnit.test('Produto de 2',  assert => assert.equal(lib.Produto(2, 2), 4))
QUnit.test('Produto de 3 e 2',  assert => assert.equal(lib.Produto(3, 2), 6))
QUnit.test('Produto de 4 e 0',  assert => assert.equal(lib.Produto(4, 0), 0))
QUnit.test('Produto de 5 e -1',  assert => assert.equal(lib.Produto(4, -1), undefined))

// Potencia
QUnit.test('Potência de 3 e 2',  assert => assert.equal(lib.Potencia(3, 2), 9))
QUnit.test('Potência de 3 e 1',  assert => assert.equal(lib.Potencia(3, 1), 3))
QUnit.test('Potência de 3 e 0',  assert => assert.equal(lib.Potencia(3, 0), 1))
QUnit.test('Potência de 3 e -1',  assert => assert.equal(lib.Potencia(3, -1), undefined))

//TODO: testes de Pi
//TODO: testes de LogaritmoNatural

QUnit.test('Primo 2', assert => assert.equal(lib.Primo(2), true))
QUnit.test('Primo 3', assert => assert.equal(lib.Primo(3), true))
QUnit.test('Primo 4', assert => assert.equal(lib.Primo(4), false))
QUnit.test('Primo 5', assert => assert.equal(lib.Primo(5), true))

// MDC(81, 54) = MDC(54, 27) = MDC(27,0) = 27
QUnit.test('MDC 81, 54', assert => assert.equal(lib.MDC(81, 54), 27))
QUnit.test('MDC 54, 27', assert => assert.equal(lib.MDC(54, 27), 27))
QUnit.test('MDC 27, 0', assert => assert.equal(lib.MDC(27, 0), 27))

QUnit.test('MDC2 81, 54', assert => assert.equal(lib.MDC2(81, 54), 27))
QUnit.test('MDC2 54, 27', assert => assert.equal(lib.MDC2(54, 27), 27))
// QUnit.test('MDC2 27, 0', assert => assert.equal( lib.MDC2(27, 0), 27))

QUnit.test('Fibonacci 10', assert => assert.equal(lib.Fibonacci(10), 55))
QUnit.test('Fibonacci 25', assert => assert.equal(lib.Fibonacci(25), 75025))
QUnit.test('Fibonacci 50', assert => assert.equal(lib.Fibonacci(50), 12586269025))

QUnit.test('CPF inválido tamanho', assert => assert.equal(lib.CPF('026464561'), false))
// QUnit.test('CPF válido', assert => assert.equal(lib.CPF('02646456182'), true))

QUnit.test('CPF2 inválido tamanho', assert => assert.equal(lib.CPF2('026464561'), false))
// QUnit.test('CPF válido', assert => assert.equal(lib.CPF2('02646456182'), true))