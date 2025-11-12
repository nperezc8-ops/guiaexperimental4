/*
Arreglos clásicos de práctica (10 ejercicios) 
17. Promedio de un arreglo 
• Entrada: [5, 7, 9, 3, 6] 
• Salida: "El promedio es 6."
*/

function promedio(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
        i=0;
        total=0;
        let contador=0;
        let prom=0;
            while(i<numeros.length){
                num=numeros[i];
                if(num!==undefined){
                total+=num;
                contador++
            }
            i++
        }
        prom=total/contador;
        console.log(`los numeros ingresados son ${numeros.join(",")} el promedio es ${prom}`)
}
promedio();