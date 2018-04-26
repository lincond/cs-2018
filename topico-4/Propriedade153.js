function Propriedade153(cdu) {
    if(  cdu < 0 || cdu > 9999)
        return false;

    const c  = Math.trunc(cdu / 100);
    const du = Math.trunc(cdu % 100);
    const d  = Math.trunc(du / 10);
    const u  = Math.trunc(du % 10);

    return  (Math.pow(c, 3) + Math.pow(d, 3) + Math.pow(u, 3)) == cdu;
}

console.log(Propriedade153(153))