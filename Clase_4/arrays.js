const miLista = ["Rodri", 35, "El Pisho"];

console.log("Array al inicio", miLista);

miLista.push(1994);

console.log("Array al final", miLista);

miLista.pop()

console.log("array luego del pop", miLista);

const nuevoArray = miLista.join(":");

console.log("Nuevo Array", nuevoArray); 

const indice = miLista.indexOf(35);

console.log("Posicion ", indice);

const elementoaBuscar = "El Pisho";

const indice2 = miLista.indexOf("El Pisho");

console.log("Posicion ", indice2);



const subLista = miLista.slice(1, 3);

console.log("Sublista cortada: subLista", subLista);