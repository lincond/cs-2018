const m = require("moment");
m.locale("pt-BR");
var agora = m(new Date());
console.log(agora.format("LLLL"));
agora.fromNow();