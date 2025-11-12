/*

2. Contar números negativos en una lista
Descripción:
Dada una lista de números, contar cuántos son negativos.
Entrada:
numeros = [3, -5, 0, 7, -1, -8]
Proceso:
Usar un ciclo for para recorrer la lista.
Contar los valores menores a 0.
Salida esperada:
Cantidad de números negativos: 3

*/
function buscar(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea calcular`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseFloat(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
    let c=0;
    while(i<numeros.length){
        let numero=numeros[i];
        if(numero<0){
            c++
        }
        i++
    }
        console.log(`la cantidades son ${numeros} y la cantidad de negativos son ${c}`)

}
buscar();