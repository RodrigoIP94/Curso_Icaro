//const param = (Math.random() * (100 - 1 + 1)) +1

//const numeroAleatorio = Math.floor(param)

//const resto = numeroAleatorio % 2 



// EJERCICIO 3


// let numero = 1

// while(numero <= 10) {
//     let resultado = numero + 1;
//     indice = numero++;
//     console.log(resultado + " x 9 =" + resultado * 9);
// }

// console.log("ESTO ES UN MENSAJE");


let miLista = [];

for(i = 0; i < 10; i++){
    let numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) +1 );
    let num = numeroRandom;
    miLista.push(num);
}

console.log(miLista);   


// Un objeto es un tipo de dato CLAVE - VALOR

// const operaciones{
//     restar, //restar: restar,
//     sumar: sumar,
// }

// operaciones.restar(1, 2);
// operaciones.sumar(2, 5);