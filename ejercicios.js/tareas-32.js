/*
Descuento al primer precio si es alto 
Leer un arreglo con 3 precios y aplicar 20% de descuento al primero si es mayor a 
200. 
• Entrada: [250, 150, 100] 
• Salida: [200, 150, 100]
 */
function descuento(){
   
let precios=[]
precios [0]=parseFloat(prompt("ingrese el precio1"));
precios [1]=parseFloat(prompt("ingrese el precio2"));
precios [2]=parseFloat(prompt("ingrese el precio3"));
if (precios[0]>200){
precios [0]=precios[0]-(precios[0]*0.20);
   console.log(`El valor a pagar es ${precios} con su respectivo descuento en el primer producto`);
}else{
    console.log(`El valor a pagar es ${precios} sin descuento`)
}
}
descuento()