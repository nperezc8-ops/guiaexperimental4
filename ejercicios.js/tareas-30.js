/*
 Notas y clasificación 
Leer 4 notas, calcular el promedio y mostrar: 
• Promedio < 40 → “Reprueba” 
• 40–69 → “Recuperación” 
• ≥70 → “Aprueba” 
• Entrada: [30, 40, 50, 60] 
• Salida: "Recuperación"
*/
function notas(){
    let n1=parseFloat(prompt("ingrese su nota 1"));
    let n2=parseFloat(prompt("ingrese su nota 2"));
    let n3=parseFloat(prompt("ingrese su nota 3"));
    let n4=parseFloat(prompt("ingrese su nota 4"));
    let promedio=(n1+n2+n3+n4)/4;
    if (promedio<40){
        console.log(`Su nota final es ${promedio} por lo tanto usted reprueba :(`);

    }else if (promedio>=40 && promedio<70){
        console.log(`Su nota final es ${promedio} por lo tanto usted va a recuperacion`);

    }else if (promedio>=70 && promedio<100){
        console.log(`su nota final es ${promedio} por lo tanto usted aprueba:)`);

    }else {
        console.log(`felicidades por su promedio ${promedio} sobresaliente `)
    }
}
notas()