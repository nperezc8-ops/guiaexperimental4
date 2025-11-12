/*
Aplicar IVA solo si precio es válido 
Leer el precio de un producto y aplicar IVA del 15% únicamente si el precio es mayor 
a 0. 
• Entrada: 200 
• Salida: Total=230

*/

function impuesto(){
let producto=parseFloat(prompt("ingrese el valor del producto"));
let descuento= producto+(producto*0.15);
if (producto>0){
console.log(`El valor total del producto es ${descuento}`);
}else {
    console.log(`No hay valor en el producto`);
}
}
impuesto();