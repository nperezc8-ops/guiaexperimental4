/*

 Sueldo con aporte y subsidio 
Leer el sueldo de un empleado, calcular el aporte al IESS (9.45%) y asignar subsidio 
según reglas: 
• <450 → $50 
• ≥450 → $30 
• ≥700 y <1000 → $20 
• caso contrario → 0 
• Entrada: 430 
• Salida: Aporte=40.63, Subsidio=50

*/
function aporte(){
    let sueldo=parseFloat(prompt("ingrese su sueldo"));
    let impuesto=sueldo-(sueldo*0.0945);
    let aporte= sueldo*0.0945
    let subsidio
    if(impuesto<450){
        subsidio=50
        console.log(`El aporte del IEES es ${aporte} y su subisdio sera ${subsidio}`);
    }else if (impuesto>=450 && impuesto< 700){
        subsidio=30
        console.log(`el aporte del IEES es ${aporte} y su subsidio es ${subsidio}`);
    } else if (impuesto>=700 && impuesto< 999){
        subsidio=20
        console.log(`el aporte del IEES es ${aporte} y su subsidio es ${subsidio}`);
    }else{
        subsidio=0
        console.log(`el aporte del IEES es ${aporte} y su subsidio es ${subsidio}`)
    }
}
aporte()