/**
 * Calcula o dia da semana de determinada data
 * @class Utilitário para cálculo do dia da semana de terminada data
 */
export class Day {
    /**
     * Retorna o dia da semana para a data informada via parâmetro, sendo
     * 0 para Segunda-Feira, 1 para Terça-Feira e assim sucessivamente
     * @param {number} d Dia que deseja saber o dia da semana
     * @param {number} m Mês da data que deseja saber o dia da semana
     * @param {number} y Ano da data que deseja saber o dia da semana
     * @returns {number} Inteiro representando o dia da semana, 0 p/ Segunda-Feira, 1 p/ Terça, etc...
     */
    dayOfWeek(d, m, y) {
        if(!this.isValid(d, m, y))
            throw 'Invalid args';
        
        if (m == 1 || m == 2) {
            m += 12;
            y--;
        }

        const t = Math.trunc // nome curto para a função trunc
        return (d + 2*m + t(3*(m+1)/5) + y + t(y/4) - t(y/100) + t(y/400)) % 7;
    }

    /**
     * Verifica se a data informada é válida para a operaçao de dia da semana
     * @param {number} day Dia que deseja verificar se é elegível
     * @param {number} month Mês que deseja verificar se é elegível
     * @param {number} year Ano que deseja verificar se é elegível
     * @returns {boolean} true caso a data seja elegível ou false caso contrário
     */
    isValid(day, month, year) {
        return  day >= 1 && day <= 31 && 
                month >= 1 && month <= 12 &&
                year > 1753;
    }
}

module.exports = Day