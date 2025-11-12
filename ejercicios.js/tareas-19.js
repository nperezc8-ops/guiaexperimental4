/*
Aportes de sueldos 
Elaborar un programa que lea un arreglo con 3 sueldos y calcule la suma de aportes 
al IESS (9.45%). 
Entrada: [500, 400, 600] 
Salida esperada: Total aporte=134.25 

*/
function IEES(){
let sueldos=[];
sueldos[0]=parseFloat(prompt("ingrese su sueldo"));
sueldos[1]=parseFloat(prompt("ingrese su sueldo"));
sueldos[2]=parseFloat(prompt("ingrese su sueldo"));
let suma=sueldos[0]+sueldos[1]+sueldos[2];
let impuesto= suma*0.0945;
return (`El aporte total de los sueldos es ${impuesto}`);

}
console.log(IEES());
