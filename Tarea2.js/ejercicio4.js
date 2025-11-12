/*

Versión condicional: 
Una empresa de impresión ofrece tarjetas de invitación: 
o Pedido ≤ 200 → $2.00 c/u. 
o Entre 201 y 300 → $1.80 c/u. 
o Más de 300 → $1.50 c/u. 
Calcular el costo total de un pedido. 
*/
function valor(){
    console.log(`
    o Pedido ≤ 200 → $2.00 c/u. 
    o Entre 201 y 300 → $1.80 c/u. 
    o Más de 300 → $1.50 c/u. `)     
    let valorUnidad,pedido;
    let cantidad=parseInt(prompt(`Ingrese la cantidad de su pedido`));
    if (cantidad<=200){
        valorUnidad=2.00;
        pedido=cantidad*valorUnidad;
    }else if(cantidad>=201 && cantidad<=300){
        valorUnidad=1.80;
        pedido=cantidad*valorUnidad;
    }else{
        valorUnidad=1.50;
        pedido=cantidad*valorUnidad;
    }
    console.log(`El valor a pagar es ${pedido}$ con un pedido de ${cantidad} de trajetas`)

}
valor();