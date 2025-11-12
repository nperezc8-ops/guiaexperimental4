/*
. Descuento del 10% a precios altos 
Leer el precio de un producto y aplicar un 10% de descuento solo si el precio es 
mayor o igual a 100. 
• Entrada: 150 
• Salida: Total=135

*/

function descuento(){
    let precio=parseFloat(prompt("ingrese el valor del producto"));
    let descuento=precio-(precio*0.10);
    if (precio>=100){
        console.log(`El producto cuesta ${precio} y con el descuento del 10% es ${descuento}`)
    }
    else {
        console.log(`El producta cuesta ${precio} no aplica descuento:/`);
    }


}
descuento();