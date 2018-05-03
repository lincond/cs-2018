(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Calcula o dia da semana de determinada data
 * @class Utilitário para cálculo do dia da semana de terminada data
 */
var Day = exports.Day = function () {
    function Day() {
        _classCallCheck(this, Day);
    }

    _createClass(Day, [{
        key: 'dayOfWeek',

        /**
         * Retorna o dia da semana para a data informada via parâmetro, sendo
         * 0 para Segunda-Feira, 1 para Terça-Feira e assim sucessivamente
         * @param {number} d Dia que deseja saber o dia da semana
         * @param {number} m Mês da data que deseja saber o dia da semana
         * @param {number} y Ano da data que deseja saber o dia da semana
         * @returns {number} Inteiro representando o dia da semana, 0 p/ Segunda-Feira, 1 p/ Terça, etc...
         */
        value: function dayOfWeek(d, m, y) {
            if (!this.isValid(d, m, y)) throw 'Invalid args';

            if (m == 1 || m == 2) {
                m += 12;
                y--;
            }

            var t = Math.trunc; // nome curto para a função trunc
            return (d + 2 * m + t(3 * (m + 1) / 5) + y + t(y / 4) - t(y / 100) + t(y / 400)) % 7;
        }

        /**
         * Verifica se a data informada é válida para a operaçao de dia da semana
         * @param {number} day Dia que deseja verificar se é elegível
         * @param {number} month Mês que deseja verificar se é elegível
         * @param {number} year Ano que deseja verificar se é elegível
         * @returns {boolean} true caso a data seja elegível ou false caso contrário
         */

    }, {
        key: 'isValid',
        value: function isValid(day, month, year) {
            return day >= 1 && day <= 31 && month >= 1 && month <= 12 && year > 1753;
        }
    }]);

    return Day;
}();

module.exports = Day;

},{}],2:[function(require,module,exports){
'use strict';

var _day = require('../day.js');

var _day2 = _interopRequireDefault(_day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var day = new _day2.default();

QUnit.test('Data de nascimento', function (assert) {
    assert.equal(day.dayOfWeek(9, 7, 1998), 3);
});

},{"../day.js":1}]},{},[2]);
