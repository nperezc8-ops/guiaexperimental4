/*
25. Copiar pares a otro arreglo 
• Entrada: [3, 8, 11, 14, 25] 
• Salida: [8, 14]
*/
function pares(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad a buscar`));
    let numeros=[];
    let i=0;
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
      let pares=[];
    while(i<numeros.length){
        let num=numeros[i];
            if(num%2==0){
                pares.push(num);
            }
            i++
        }
            console.log(`Los pares de los numeros ${numeros.join(",")} son =${pares.join(",")}`);

}
pares();