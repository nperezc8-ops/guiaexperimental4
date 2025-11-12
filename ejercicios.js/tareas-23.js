/*
Promedio mayor a 10 
Elaborar un programa que lea tres números y determine si su promedio es mayor a 
10. 
• Entrada: 12, 10, 9 
• Salida: "El promedio es mayor a 10"

*/


function promedio(){
let n1=parseFloat(prompt("ingrese el valor 1"));
let n2=parseFloat(prompt("ingrese el valor 2"));
let n3=parseFloat(prompt("ingrese el valor 3"));
let prom= (n1+n2+n3)/3
if (prom>10){
    console.log(`el promedio es ${prom} por lo cual es mayor a 10` );
} else {
    console.log(`El promedio es ${prom} por lo que no es mayor a 10`);
}
}
promedio();