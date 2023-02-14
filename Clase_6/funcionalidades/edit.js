const data = require("../tasksData");

function edit(titulo, nuevaDescripcion){
    for( i = 0; i < data.length; i++){
        if (titulo == data[i].title){
        data[i].desc = nuevaDescripcion
        }
    }
    return data;
}

edit("Titulo 2", "Nueva descripcion");
console.log("Array: ", data);

module.exports = edit;