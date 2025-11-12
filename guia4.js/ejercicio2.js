/*
2. Divisores de un número 
Descripción: 
Mostrar todos los números que dividen exactamente al número ingresado. 
Proceso: 
1. Recorrer de 1 a n. 
2. Si n % i == 0, i es divisor. 
Ejemplo: 
n = 12   
Divisores: 1, 2, 3, 4, 6, 12 
Salida: 
Divisores: 1, 2, 3, 4, 6, 12
*/
function divisores(){
    let numero=parseInt(prompt(`Ingrese la cantidad que desea ver su divisores`));
    let i=0;
    while(i<=numero){
        if(numero%i==0){
            console.log(`${i}`);
        }
        i++
    }
}
divisores();