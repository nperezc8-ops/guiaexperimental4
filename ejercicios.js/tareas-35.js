/*
 Último nombre vacío 
Leer un arreglo con 5 nombres y verificar si el último está vacío. 
• Entrada: [“Ana”, “Luis”, “”] 
• Salida: "El último está vacío"

*/
function leer (){
    let nombre=[];
    nombre[0]=prompt("ingrese su nombre");
    nombre[1]=prompt("ingrese su nombre");
    nombre[2]=prompt("ingrese su nombre");
    if(nombre[2].trim()==""){
        console.log(`${nombre} y el ultimo esta vacio `);
    }else {
        console.log(nombre.join(" "))
    }
}
leer();