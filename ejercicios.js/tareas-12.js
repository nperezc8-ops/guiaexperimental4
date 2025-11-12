/*
 Área de un triángulo 
Diseñar un programa que lea la base y la altura de un triángulo y calcule su área. 
Entrada: base=10, altura=5 
Salida esperada: Área=25 
*/

function calcularArea(){
let base=parseFloat(prompt("ingrese la base"));
let altura=parseFloat(prompt("ingrese la altura"));
let calcular= base*altura/2
return(`La area del triangulo es ${calcular}`);
}
console.log(calcularArea());
