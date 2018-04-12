function fatorial(n) {
    let produto = 2;
    if (n < 2) {
      return 1;
     }
     
     while (n > 2) {
       produto = produto * n;
       n = n - 1;
     }
     
     return produto;
 }
 
 console.log(fatorial(5));