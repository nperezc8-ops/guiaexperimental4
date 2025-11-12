/*
5. Promedio de números pares e impares
Descripción:
Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
Entrada / Proceso:
Ingresar n.
Leer cada número dentro de un ciclo for.
Acumular por separado los pares (n % 2 == 0) y los impares (n % 2 != 0).
Calcular los promedios respectivos.
Salida esperada:
Ingrese cantidad de números: 6  
Valores: 2, 5, 8, 9, 4, 7  
Promedio de pares: 4.67  
Promedio de impares: 7.00
*/
function promedio(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea`));
    let i=0;
    let numeros;
    let totalPar=0;
    let totalImpar=0;
    let p=0;
    let m=0;
    while(i<cantidad){
        numeros=parseInt(prompt(`Ingrese el numero ${i+1}`));
        if(numeros%2==0){
            totalPar+=numeros;
            p++
        }else{
            totalImpar+=numeros;
            m++
        }
        i++
    }
        let promedioPar=totalPar/p;
    let promedioimpar=totalImpar/m;
    console.log(`
            el promedio de los numeros par ${promedioPar}
            el promedio de los numeros impares es ${promedioimpar}`);
}
promedio();