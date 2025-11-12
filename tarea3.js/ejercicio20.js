/*
5. Promedio de números pares e impares
Descripción:
Dada una lista de números, calcular el promedio de los pares y de los impares.
Entrada:
numeros = [2, 5, 8, 9, 4, 7]
Proceso:
Recorrer el arreglo con un ciclo for.
Sumar y contar pares e impares por separado.
Calcular los promedios respectivos.
Salida esperada:
Promedio de pares: 4.67  
Promedio de impares: 7.00


*/
function promedio(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
    let totalPar=0;
    let totalImpar=0;
    let p=0;
    let m=0;
    while(i<numeros.length){
        let num=numeros[i];
        if(num%2==0){
            totalPar+=num;
            p++
        }else{
            totalImpar+=num;
            m++
        }
        i++
    }
    let promedioPar=totalPar/p;
    let promedioimpar=totalImpar/m;
    console.log(`los numeros son ${numeros},
            el promedio de los numeros par ${promedioPar}
            el promedio de los numeros impares es ${promedioimpar}`);
}
promedio();