/*
 IVA y descuento según precio (varios) 
Leer n precios. Si el precio >50 aplicar IVA del 15% y descuento del 20%. Caso 
contrario aplicar solo IVA del 15%. 
• Entrada: [40, 60] 
• Salida: [46, 58.65]
*/
function impuestos(){
    let n=parseInt(prompt(`Ingrese los precios que desea pagar`));
    let c=1;
    let precios;
    let descuento;
    let iva;
    let DyI;
    while(c<=n){
        precios=parseFloat(prompt(`Ingrese su precio ${c}`));
        if(precios>50){
            descuento=precios-(precios*0.20);
            DyI=descuento+(descuento*0.15);
            console.log(`El valor a pagar es ${DyI} aplicando su descuento de 20% y su IVA de 15%`)
        }else {
            iva=precios+(precios*0.15);
            console.log(`El valor a pagar es ${iva} (no aplica descuento)`)
        }
            c=c+1
        }
    }
    impuestos()
