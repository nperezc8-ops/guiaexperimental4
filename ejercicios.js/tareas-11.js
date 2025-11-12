/*
Precio con descuento e IVA 
Desarrollar un programa que lea el precio de un producto y calcule el valor final 
aplicando un descuento del 5% y luego un IVA del 12%. 
Entrada: 100 
Salida esperada: 106.4
*/
function totalPagar (){
let cantidad= parseFloat(prompt("ingrese la cantidad"));
let descuento= cantidad-(cantidad*0.05);
let total=descuento+(descuento*0.12);
return (`El total a pagar es ${total}`);


}
console.log(totalPagar());
