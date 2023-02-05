// CTRL + K + C (Comentar TODO)
// CTRL + K + U (Descomentar TODO)

// function Sumar(num1, num2){
//     return num1 + num2
// };


// let resultado = Sumar(4, 5);
// console.log(resultado);


// // OTRA FORMA DE LA MISMA LOGICA

// function Sumar(num1, num2){
//     let resultado = num1 + num2
//     return resultado
// };

// //let resultado = Sumar(4, 5)
// //console.log(resultado);


// //ESTRUCTURAS DE CONTROL

// if(resultado < 12){
//     let nuevoNum = 4;
//     multiplicacion = nuevoNum * resultado;
//     console.log("si, el resultado es mayor, y asigno un nuevo numero: ", multiplicacion);
// }else{
//     console.log("No, el resultado es menor");
// }

// SWITCH


// let letra = "H" 


// switch(letra){
//     case "A":
//         console.log("Se cumple la condicion A");
//         break;
//     case "B":
//         console.log("Se cumple la condicion B");
//         break;
//     default: 
//         console.log("No se cumple ninguna"); 
// }


// Bucles while y do While

// let numero = 4

// While(numero < 8){
//     resultado = numero + 1 // numero++
//     console.log("numero tiene: ",numero);
// } 



// do{
//     numero = numero++
// } while(numero < 8);

// console.log("numero al final del buble: ", numero);


// BUCLE FOR

const miLista = ["Rodrigo", "29", 5, "el Pisho", "Icaro"];

// console.log(miLista[0]); ---> ESTO SE REMPLAZA POR UN ""BUCLE FOR"
// console.log(miLista[1]);
// console.log(miLista[2]);

//console.log(miLista.length);  

for(let i=0; i < miLista.length; i++){
    console.log("posicion " + i, miLista[i]);
}

const sumar = require("./Otro")


