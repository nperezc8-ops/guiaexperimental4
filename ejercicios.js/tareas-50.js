/*
50. Nombres vacíos en arreglo 
Leer un arreglo de n nombres y mostrar cuántos están vacíos. 
• Entrada: ["Ana", "", ""] 
• Salida: "2 nombres vacíos"
*/

function nombresVacios(){
    let n = parseInt(prompt("Ingrese la cantidad de nombres:"));
    let nombres = [];
    let c = 1;

    while(c <= n){
        let nombre = prompt(`Ingrese el nombre ${c}:`);
        nombres.push(nombre);
        c=c+1;
    }

    let i = 0;
    let contador = 0;
    while(i < nombres.length){
        if(nombres[i].trim() === ""){ 
            contador++;
        }
        i=i+1;
    }

    console.log(`${contador} nombres vacíos`);
}

nombresVacios();