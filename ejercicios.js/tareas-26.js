/*
IVA y descuento según precio 
Si el precio de un producto es mayor a 50, aplicar IVA del 15% y descuento del 10%. 
En caso contrario, aplicar solo IVA del 15%. 
• Entrada: 60 
• Salida: Total=58.65

*/
function impuestos(){
   let producto=parseFloat(prompt("ingrese el valor del producto"));
   let descuento=producto-(producto*0.10);
   let impuesto=producto+(producto*0.15);
   let IyD= descuento+(descuento*0.15);
   if (producto>50){
    console.log(`El valor del producto es ${producto} por lo cual su descuento e IVA es ${IyD}`);
    }else {
        console.log(`El valor del producto es ${producto} por lo cual con su iva es ${impuesto} `);
    }
    
}
impuestos()