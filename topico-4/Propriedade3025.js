function Propriedade3025(number) {
    if ( number < 0 || number > 9999 )
        return false;
    
    const i = Math.trunc(number / 100);
    const j = Math.trunc(number % 100);

    console.log(i, j);
    return Math.pow((i + j), 2) == number;
}

console.log(Propriedade3025(1))