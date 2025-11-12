/*
/*
47. Descuento a precios mayores a 200 
Leer un arreglo con n precios y aplicar 20% de descuento a los que superen 200. 
• Entrada: [250, 150, 300] 
• Salida: [200, 150, 240]
*/

function descuentos(){
    let n = parseInt(prompt("Ingrese la cantidad de precios:"));
    let precios = [];
    let c = 1;
    while(c <= n){
        let precio = parseFloat(prompt(`Ingrese el precio ${c}:`));
        precios.push(precio);
        c=c+1;
    }
    let i = 0;
    while(i < precios.length){
        if(precios[i] > 200){
            precios[i] = precios[i]-(precios[i]*0.20); 
        }
        i=i+1;
    }

    console.log("Precios finales con descuento:");
    console.log(precios);
}

descuentos();
