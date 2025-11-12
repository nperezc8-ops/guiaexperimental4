/*Aporte al IESS 
Elaborar un programa que lea el sueldo de un empleado y calcule su aporte al IESS 
(9.45% del sueldo). 
Entrada: sueldo=500 
Salida esperada: Aporte=47.25 
*/ 
function aporte(){
let sueldo= parseFloat(prompt("ingrese su sueldo correspondiente"));
let porcentaje = sueldo*0.0945;
return (`El aporte del IEES es ${porcentaje}`);
}
console.log(aporte());