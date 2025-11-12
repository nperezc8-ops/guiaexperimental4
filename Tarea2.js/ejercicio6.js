/*
6. Versión con arreglos: 
Guardar en un arreglo las cantidades de tarjetas de N pedidos. Calcular en un arreglo 
paralelo el costo total de cada pedido.

*/
function valor(){
    let grupos=parseInt(prompt(`Ingrese la cantidad de pedidos`));
   let pedidos=[];
   let c=0;
   let total;
   console.log(` o Pedido ≤ 200 → $2.00 c/u. 
                 o Entre 201 y 300 → $1.80 c/u. 
                 o Más de 300 → $1.50 c/u. `)
   while(c<grupos){
    pedidos[c]=parseInt(prompt(`Ingrese la cantidad de tarjetas ${c+1}`));
    
    if (pedidos[c]<=200){
        total=pedidos[c]*2.00;
    }else if(pedidos[c]>=201 && pedidos[c]<=300){
        total=pedidos[c]*1.80;
    }else{
        total=pedidos[c]*1.50;
    }
   console.log(`El valor total del grupo ${c+1} del pedido es ${total}$ con la cantidad de ${pedidos[c] } tarjetas`)
   c++
}


}
valor();