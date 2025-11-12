/*
Área y perímetro de un círculo 
Escribir un programa que lea el radio de un círculo y muestre su área y perímetro. 
Entrada: radio=3 
Salida esperada: Área≈28.27, Perímetro≈18.85 
*/
function calcular(){
let r=parseFloat(prompt("ingrese el valor del radio"));
const pi=3.14;
let area =pi*r**2
let perimetro=2*pi*r;
return (`El area del circulo seria ${area} y el perimetro es ${perimetro}`);
}
console.log(calcular());
