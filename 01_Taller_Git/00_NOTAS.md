GIT es un software de control de versiones {utilizado en programacion para guardar codigo};

Trabaja mediante Branchs y Commits

BRANCHS[son lineas de tiempo];
COMMITS[Son fechas importantes del codigo];

BRANCH, COMMIT, MERGE

Nos permite trabajar en equipo sobre el mismo proyecto pero en distintas partes del mismo. (Cabecera, cuerpo, etc);

- A medida que nos gusta como va quedando se va guardando [se van creando versiones del codigo y luego se unen para hacer el versionado final]; -

-COMANDOS GIT-

* [git init]: Nos permite iniciar un repositorio [al igual que "npm init"];
* [git add]: hacer el seguimiento de un archivo;
* [git commit -m]: crea una nueva version de los archivos afectados por el comando anterior ("-m": agrega un mensaje al commit);
* [git log]: ver el historial de nuestro repositorio;
* [git diff]: comparar cambios entre version actual y anterior(la ultima);
* [git reset]: remueve archivos del "staging area";
* [git checkout]: permite alternar entre ramas;
* [git checkout -b]: permite crear ramas;
* [git merge]: une modificaciones entre dos ramas;
* [git status]: ver el estado de los archivos;
* [git remote add origin "enlace Git"] permite agregar un repositorio a nuestro workspace;
* [git remote -v] nos muestra el estado del git remoto;
* [git pull] empareja el    remoto con el local;
* [git checkout -- .] restaura el ultim o commit;
* [git remote add origin "enlace"] agregar repositorio;
* [git branch m- "rama"] nos permite ubicar lo que queremos subir en determinada rama; (chequear esto)* 
* [rm -rf ."nombre"] desvincular branch.

-COMANDOS GIT BASH-

[clear]--> limpia la consola;
[pwd] ---> me indica en donde estoy posicionado;
[cd]-----> me permite cambiar o ingrear al directorio;
[cd ..]--> me permite volver una posicion atras;
[ls]-----> lista los archivos y carpetas;
[ls -a]--> lsta archivos y carpetas ocultos;
[node "nombre.enlace"] corre el programa;
[mkdir]--> crea un directorio;
[touch "nombre.enlace"] crea archivos;
[code "nombre del archivo"] abre archivo en vs code
[git config user.name "Nombre"] nombre con el que se va a subir el commit;
[git config user.email "email"] configura el mail que se utiliza para subir el commit;
[git log] lista los login de los commit (me dice quien y cuando hizo un commit y muestra el mensaje);

