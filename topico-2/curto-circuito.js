function falso() {
    console.log("falso");
    return false;
}

function verdadeiro() {
    console.log("verdadeiro");
    return true;
}

console.log(verdadeiro() || falso());