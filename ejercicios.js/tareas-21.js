/*
3. Procesos Condicionales (15 ejercicios) 
21. Bienvenida solo si no está vacío 
Escribir un programa que lea el nombre de un estudiante y muestre “Bienvenido” 
únicamente si no está vacío. 
• Entrada: "Juan" 
• Salida: "Bienvenido Juan"

*/
function saludar (){
    let hola= prompt("ingresa tu nombre");
    if (hola.trim()!==""){
    console.log(`Bienvenid@ ${hola}`);
    }else {
     console.log(`Tiene que ingresar un nombre`)   
    }
}
saludar()