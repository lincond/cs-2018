function fatorial(n) {
    let contador = 2;
    let produto = 1;
    
    if (n < 2) {
      return 1;
    }
     
    while (contador <= n) {
       produto = produto * contador;
       contador = contador + 1;
    }
     
     return produto;
 }
 
 console.log(fatorial(5));