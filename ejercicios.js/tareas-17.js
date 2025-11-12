/*
 Precios con IVA y descuento 
Desarrollar un programa que lea un arreglo de 3 precios, calcule el total aplicando 
IVA del 12% y un descuento del 20%. 
Entrada: [100, 200, 300] 
Salida esperada: Total=537.6

*/
function impuesto(){
let precios=[];
precios[0]=parseFloat(prompt("ingrese el precio1"));
precios[1]=parseFloat(prompt("ingrese el precio2"));
precios[2]=parseFloat(prompt("ingrese el precio3"));
let suma= precios[0]+precios[1]+precios[2];
let descuento= suma-(suma*0.20);
let total= descuento+(descuento*0.12);
return (`El total es ${total}`);
}
console.log(impuesto());