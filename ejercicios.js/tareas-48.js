/*
48. Notas aprobadas en arreglo 
Leer un arreglo con n notas y mostrar cuántas son ≥70. 
• Entrada: [50, 80, 90] 
• Salida: "2 notas ≥70"
*/

function notasAprobadas(){
    let n = parseInt(prompt("Ingrese la cantidad de notas:"));
    let notas = [];
    let c = 1;

    while(c <= n){
        let nota = parseFloat(prompt(`Ingrese la nota ${c}:`));
        notas.push(nota);
        c=c+1;
    }
    let i = 0;
    let contador = 0;
    while(i < notas.length){
        if(notas[i] >= 70){
            contador=contador+1;
        }
        i=i+1;
    }

    console.log(`${contador} notas ≥70`);
}

notasAprobadas();