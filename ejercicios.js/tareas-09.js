/*
Precio con IVA 
Escribir un programa que lea el precio de un producto y calcule el valor final 
aplicando un IVA del 12%. 
Entrada: 100 
Salida esperada: Total=112
*/
function impuesto (){
let cantidad=prompt("ingrese la cantidad");
cantidad= parseFloat(cantidad);
const IVA=0.12
let total= cantidad +(cantidad*IVA);

return (`el valor total con impuesto es ${total}`);

}
console.log (impuesto());