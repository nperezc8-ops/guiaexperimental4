/*
5. Verificar si un número es primo 
Descripción: 
Un número primo solo tiene dos divisores: 1 y él mismo. 
Proceso: 
1. Recorrer del 2 hasta n-1. 
2. Si n % i == 0, no es primo. 
Ejemplo: 
n = 11   
Divisores: 1 y 11 → primo   
n = 12   
Divisores: 1, 2, 3, 4, 6, 12 → no primo 
Salida: 
11 es un número primo. 
*/
function primo(){
    let numero=parseInt(prompt(`Ingrese el numero que desea calcular`));
    let primo=true;
    if(numero<=1){
        primo=false;
    }else{
    let j=2;
    while(j<numero){
        if(numero%j==0){
            primo=false;
    }
     j++
    }
}
    if(primo){
        console.log(`El numero ${numero} es primo`);
    }else{
        console.log(`El numero ${numero} no es primo`);
    }
}
primo()