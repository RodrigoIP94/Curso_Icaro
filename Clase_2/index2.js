let nombre = "Rodrigo";
let apellido = "El Pisho";
let edad = "5"

// function concatenar() {
//    const palabracompleta = nombre + " "+ edad 
//    return palabracompleta
// }

const resultado1 = concatenar(nombre, apellido);
const resultado2 = concatenar("nelson", "mandela");

console.log(resultado);

function concatenar(paramNombre, paramApellido) {
    const palabracompleta = paramNombre + " "+ paramApellido 
    return palabracompleta
}

