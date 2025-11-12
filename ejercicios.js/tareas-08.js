/*
Realizar un programa que lea tres números reales y calcule su promedio aritmético. 
Entrada: 5, 10, 15 
Salida esperada: Promedio=10


*/


function promedio(){
let n1=prompt("ingrese el valor 1");
let n2=prompt("ingrese el valor 2");
let n3=prompt("ingrese el valor 3");
const divisor=3;
n1=parseFloat(n1);
n2=parseFloat(n2);
n3=parseFloat(n3);
return (`El promedio es ${(n1+n2+n3)/divisor})`)

}
console.log(promedio());
