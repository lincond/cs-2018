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
