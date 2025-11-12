/*
2. Contar cuántos números negativos se ingresan
Descripción:
Ingresar n números y contar cuántos son negativos.
Entrada / Proceso:
Leer n.
Usar un ciclo for o while para pedir los números.
Contar los valores menores a 0.
Salida esperada:
Ingrese cuántos números desea ingresar: 6  
Valores: 3, -5, 0, 7, -1, -8  
Cantidad de negativos: 3
*/
function buscar(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea calcular`));
    let i=0;
    let c=0;
    let numeros;
    while(i<cantidad){
        numeros=parseFloat(prompt(`Ingrese el numero ${i+1}`));
        if(numeros<0){
            c++
    }
     i++
    }  
     console.log(`la cantidad de negativos son ${c}`)  
}
buscar();