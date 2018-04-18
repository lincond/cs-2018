(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
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

},{"../app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9hcHAuanMiLCJyYXctdGVzdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuY29uc3QgRVJST19DQVJBQ1RFUl9JTlZBTElETyA9ICdDYXJhY3RlcmVzIGludsOhbGlkb3MnXG5jb25zdCBFUlJPX1RJUE9fSU5WQUxJRE8gPSAnVGlwbyBpbnbDoWxpZG8gZGUgcGFyw6JtZXRybydcblxuLyoqXG4gKiBSZWNlYmUgdW1hIHNlcXXDqm5jaWEgZGUgY2FyYWN0ZXJlcyBlIHByb2R1eiBuYSBzYcOtZGEgdW1hIHNlcXXDqm5jaWFcbiAqIGNvbnRlbmRvIGFwZW5hcyBhcyBsZXRyYXMsIHNlbSBvcyBlc3Bhw6dvcywgbWFzIGVtIG9yZGVtIGFsZmFiw6l0aWNhLlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIHNlcXXDqm5jaWEgZGUgY2FyYWN0ZXJlcywgYXBlbmFzIGxldHJhcyBbYS16XSwgYWzDqW0gZGUgZXNwYcOnbyBlbSBicmFuY29cbiAqL1xuZnVuY3Rpb24gc29wYURlTGV0cmFzKHN0cikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJylcbiAgICAgICAgdGhyb3cgRXJyb3IoRVJST19USVBPX0lOVkFMSURPKVxuXG4gICAgbGV0IGxldHJhcyA9IHN0ci5zcGxpdCgnJyk7XG4gICAgbGV0cmFzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGlmICggKGMgPCAnYScgfHwgIGMgPiAneicgKSAmJiBjICE9ICcgJyApXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihFUlJPX0NBUkFDVEVSX0lOVkFMSURPKVxuICAgIH0pO1xuXG4gICAgaWYgKHN0ci5sZW5ndGggPCAxKVxuICAgICAgICB0aHJvdyBFcnJvcihFUlJPX0NBUkFDVEVSX0lOVkFMSURPKVxuXG4gICAgaWYgKHN0ci5sZW5ndGggPT0gMSlcbiAgICAgICAgcmV0dXJuIHN0clxuXG4gICAgbGV0cmFzID0gbGV0cmFzLnNvcnQoKTtcbiAgICBsZXRyYXMgPSBsZXRyYXMuZmlsdGVyKCBjID0+IHsgcmV0dXJuIGMgIT0gJyAnOyB9ICk7XG4gICAgcmV0dXJuIGxldHJhcy5qb2luKCcnKTtcbn1cblxuLy8gY29uc29sZS5sb2coc29wYURlTGV0cmFzKCcnKSlcblxuZXhwb3J0cy5zb3BhRGVMZXRyYXMgPSBzb3BhRGVMZXRyYXM7XG5leHBvcnRzLkVSUk9fQ0FSQUNURVJfSU5WQUxJRE8gPSBFUlJPX0NBUkFDVEVSX0lOVkFMSURPXG5leHBvcnRzLkVSUk9fVElQT19JTlZBTElETyA9IEVSUk9fVElQT19JTlZBTElET1xuIiwiY29uc3Qgb3BlcmFjYW8gPSByZXF1aXJlKCcuLi9hcHAnKTtcblxuUVVuaXQudGVzdCgnQXBlbmFzIHVtYSBsZXRyYScsIChhc3NlcnQpID0+IHtcbiAgICBjb25zdCBzdHIgPSAnYyc7XG4gICAgbGV0IHJlc3VsdGFkbyA9IG9wZXJhY2FvLnNvcGFEZUxldHJhcyhzdHIpO1xuICAgIGFzc2VydC5lcXVhbChyZXN1bHRhZG8sIHN0cik7XG59KTtcblxuUVVuaXQudGVzdCgnQXBlbmFzIHVtYSBwYWxhdnJhJywgKGFzc2VydCkgPT4ge1xuICAgIGNvbnN0IHN0ciA9ICdjYXNhJztcbiAgICBsZXQgcmVzdWx0YWRvID0gb3BlcmFjYW8uc29wYURlTGV0cmFzKHN0cik7XG4gICAgYXNzZXJ0LmVxdWFsKHJlc3VsdGFkbywgJ2FhY3MnKTtcbn0pO1xuXG5RVW5pdC50ZXN0KCdQYWxhdnJhcyBzZXBhcmFkYXMgcG9yIGVzcGHDp28nLCAoYXNzZXJ0KSA9PiB7XG4gICAgY29uc3Qgc3RyID0gJ2xhIGNhc2EgZGUgcGFwZWwnO1xuICAgIGxldCByZXN1bHRhZG8gPSBvcGVyYWNhby5zb3BhRGVMZXRyYXMoc3RyKTtcbiAgICBhc3NlcnQuZXF1YWwocmVzdWx0YWRvLCAnYWFhYWNkZWVsbHBwcycpO1xufSk7XG5cblFVbml0LnRlc3QoJ1RvZG9zIG9zIGNhcmFjdGVyZXMgdsOhbGlkb3MnLCAoYXNzZXJ0KSA9PiB7XG4gICAgY29uc3Qgc3RyID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeic7XG4gICAgbGV0IHJlc3VsdGFkbyA9IG9wZXJhY2FvLnNvcGFEZUxldHJhcyhzdHIpO1xuICAgIGFzc2VydC5lcXVhbChyZXN1bHRhZG8sICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicpO1xufSk7XG5cblFVbml0LnRlc3QoJ0NhcmFjdGVyZSBpbnbDoWxpZG8nLCAoYXNzZXJ0KSA9PiB7XG4gICAgY29uc3Qgc3RyID0gJzEnO1xuICAgIHRyeSB7XG4gICAgICAgIG9wZXJhY2FvLnNvcGFEZUxldHJhcyhzdHIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGFzc2VydC5lcXVhbChlcnJvci5tZXNzYWdlLCBvcGVyYWNhby5FUlJPX0NBUkFDVEVSX0lOVkFMSURPKTtcbiAgICB9XG59KTtcblxuUVVuaXQudGVzdCgnU3RyaW5nIGNvbSBjYXJhY3RlcmUgaW52w6FsaWRvJywgKGFzc2VydCkgPT4ge1xuICAgIGNvbnN0IHN0ciA9ICdhYmMgMTIzJztcbiAgICB0cnkge1xuICAgICAgICBvcGVyYWNhby5zb3BhRGVMZXRyYXMoc3RyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhc3NlcnQuZXF1YWwoZXJyb3IubWVzc2FnZSwgb3BlcmFjYW8uRVJST19DQVJBQ1RFUl9JTlZBTElETyk7XG4gICAgfVxufSk7XG5cblFVbml0LnRlc3QoJ1RpcG8gaW52w6FsaWRvIGRlIGFyZ3VtZW50bycsIChhc3NlcnQpID0+IHtcbiAgICBjb25zdCBzdHIgPSB7fTtcbiAgICB0cnkge1xuICAgICAgICBvcGVyYWNhby5zb3BhRGVMZXRyYXMoc3RyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhc3NlcnQuZXF1YWwoZXJyb3IubWVzc2FnZSwgb3BlcmFjYW8uRVJST19USVBPX0lOVkFMSURPKTtcbiAgICB9XG59KTtcblxuUVVuaXQudGVzdCgnQXJndW1lbnRvIHN0cmluZyB2YXppYScsIChhc3NlcnQpID0+IHtcbiAgICBjb25zdCBzdHIgPSAnJztcbiAgICB0cnkge1xuICAgICAgICBvcGVyYWNhby5zb3BhRGVMZXRyYXMoc3RyKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhc3NlcnQuZXF1YWwoZXJyb3IubWVzc2FnZSwgb3BlcmFjYW8uRVJST19DQVJBQ1RFUl9JTlZBTElETyk7XG4gICAgfVxufSk7XG4iXX0=
