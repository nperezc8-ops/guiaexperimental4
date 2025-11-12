/*
 Descuento del 10% a precios altos 
Leer n precios y aplicar descuento del 10% a los que cuesten ≥100. 
• Entrada: [80, 150] 
• Salida: [80, 135]
*/
function descuento(){
    let n=parseInt(prompt("ingrese los precios que desea pagar"));
    let c=1;
    let descuento;
    let precios;
    while(c<=n){
        precios=parseFloat(prompt(`Ingrese sus precios ${c}`));
        if(precios>=100){
            descuento=precios-(precios*0.10);
            console.log(`El precio a pagar es ${descuento} con el 10% de descuento`)
        }else{
            console.log(`El precio a pagar es ${precios} no aplica descuento`)
        }
        c=c+1
    }


}
descuento()
