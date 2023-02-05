function dividir(num1, num2){
    if (num2 === 0 ){
        throw new Error ("No se puede dividir por 0");
    }
    let resultado = num1 / num2;
    return(resultado);
}

module.exports = dividir;