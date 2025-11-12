/*
39. Precios con IVA y descuento en lote 
Leer n precios y aplicar IVA del 15% con un descuento del 5% solo a los que sean 
mayores a 10. 
• Entrada: [8, 20] 
• Salida: [9.2, 21.85]
*/
function precios(){
    let n=parseInt(prompt("Cuantos precios van a ingresar"));
    let c=1;
    let precios
    let iva
    let IyD
    while(c<=n){
        precios=parseFloat(prompt(`ingrese su precio ${c} `));
        if(precios>10){
            iva=precios-(precios*0.05);
            IyD=iva+(iva*0.15)
            console.log (`El valor a pagar con IVA y descuento es ${IyD}`);
        }else {
            console.log (`el valor a pagar es ${precios} (no aplica descuento ni IVA)`)
        }
        c=c+1
    }
}
    precios()

