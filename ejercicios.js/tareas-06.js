/*
Mensaje de bienvenida 
Desarrollar un programa que lea el nombre de un estudiante y lo muestre en pantalla 
acompañado de un mensaje de bienvenida. 
Entrada: "Ana" 
Salida esperada: "Bienvenida Ana" 


*/
function saludar (){
let nombre=prompt("nombre");
return (`Bienvenido ${nombre}`);
}
console.log(saludar());