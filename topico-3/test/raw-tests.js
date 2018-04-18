const operacao = require('../app');

QUnit.test('Apenas uma letra', (assert) => {
    const str = 'c';
    let resultado = operacao.sopaDeLetras(str);
    assert.equal(resultado, str);
});

QUnit.test('Apenas uma palavra', (assert) => {
    const str = 'casa';
    let resultado = operacao.sopaDeLetras(str);
    assert.equal(resultado, 'aacs');
});

QUnit.test('Palavras separadas por espaço', (assert) => {
    const str = 'la casa de papel';
    let resultado = operacao.sopaDeLetras(str);
    assert.equal(resultado, 'aaaacdeellpps');
});

QUnit.test('Todos os caracteres válidos', (assert) => {
    const str = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let resultado = operacao.sopaDeLetras(str);
    assert.equal(resultado, 'abcdefghijklmnopqrstuvwxyz');
});

QUnit.test('Caractere inválido', (assert) => {
    const str = '1';
    try {
        operacao.sopaDeLetras(str);
    } catch (error) {
        assert.equal(error.message, operacao.ERRO_CARACTER_INVALIDO);
    }
});

QUnit.test('String com caractere inválido', (assert) => {
    const str = 'abc 123';
    try {
        operacao.sopaDeLetras(str);
    } catch (error) {
        assert.equal(error.message, operacao.ERRO_CARACTER_INVALIDO);
    }
});

QUnit.test('Tipo inválido de argumento', (assert) => {
    const str = {};
    try {
        operacao.sopaDeLetras(str);
    } catch (error) {
        assert.equal(error.message, operacao.ERRO_TIPO_INVALIDO);
    }
});

QUnit.test('Argumento string vazia', (assert) => {
    const str = '';
    try {
        operacao.sopaDeLetras(str);
    } catch (error) {
        assert.equal(error.message, operacao.ERRO_CARACTER_INVALIDO);
    }
});
