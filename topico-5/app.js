import Day from './day.js';
const readline = require('readline');
const day = new Day();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o dia da data desejada? ', dia => {
    rl.question('Qual o mês da data desejada? ', mes => {
        rl.question('Qual o ano da data desejada? ', ano => {
            const diasDaSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];
            const whatDay = (dia) => { return diasDaSemana[dia] };

            const diaDaSemana = whatDay(day.dayOfWeek(parseInt(dia), parseInt(mes), parseInt(ano)));
            console.log(`\nO dia da semana em ${dia}/${mes}/${ano} era ${diaDaSemana}`);
            rl.close();
        })
    })
});
