// Veja https://pt.wikipedia.org/wiki/Fatorial
function fatorial(n) {
    return n == 0 ? 1 : n * fatorial(n-1);
 }
 
 // Reescrevendo como uma arrow function
 const f = n => n == 0 ? 1 : n * f(n-1);
 
 console.log(f(10) == fatorial(10)); // true