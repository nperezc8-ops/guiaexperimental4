/*

44. Sueldos con subsidios 
Leer n sueldos, calcular aporte IESS (9.45%) y añadir subsidio: $50 si sueldo <450, $20 
si entre 700 y 999. 
• Entrada: [430, 800] 
• Salida: (Aporte=40.63+Sub50), (Aporte=75.6+Sub20)

*/
function aporte(){
    let n=parseInt(prompt("ingrese la cantidad de sueldos que desee calcular"));
    let c=1;
    let aporte,subsidio,sueldos;
    while(c<=n){
        sueldos=parseFloat(prompt(`Ingrese su sueldo ${c}`));
        aporte=sueldos*0.0945;
        if(sueldos<450){
            subsidio=50
            console.log(`Su sueldo es ${sueldos} y su aporte ${aporte} + ${subsidio}(subsidio)`);
        }else if(sueldos>700 && sueldos<=999){
            subsidio=20
            console.log(`Su sueldo es ${sueldos} y su aporte es ${aporte} +${subsidio} (subsidio)`);
        }else{
            console.log (`Su sueldo es ${sueldos} y su aporte es ${aporte}`)

            }
            c=c+1
        }
    }
    aporte()