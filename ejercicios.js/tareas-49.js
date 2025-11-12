/*
49. Sueldos bajos en arreglo 
Leer un arreglo de n sueldos y mostrar cuántos son menores al salario básico (450). 
• Entrada: [400, 600, 300] 
• Salida: "2 menores al básico"
*/

function sueldosBajos(){
    let n = parseInt(prompt("Ingrese la cantidad de sueldos:"));
    let sueldos = [];
    let c = 1;
    while(c <= n){
        let sueldo = parseFloat(prompt(`Ingrese el sueldo ${c}:`));
        sueldos.push(sueldo);
        c=c+1;
    }

    let i = 0;
    let contador = 0;
    while(i < sueldos.length){
        if(sueldos[i] < 450){
            contador=contador+1;
        }
        i=i+1;
    }

    console.log(`${contador} menores al básico`);
}

sueldosBajos();