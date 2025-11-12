/*
Precio con descuento 
Elaborar un programa que lea el precio de un producto y calcule el valor final con un 
descuento del 10%. 
Entrada: 200 
Salida esperada: Total=180

*/

function descuento (){
 let cantidad=prompt("ingrese la cantidad");
 cantidad=parseFloat(cantidad);
 const iva=0.10;
 let total= cantidad-(cantidad*iva);
 return (`El total a pagar con descuento es ${total}`) 

}
console.log(descuento());
