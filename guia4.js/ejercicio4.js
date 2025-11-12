/*
4. Verificar si un número es perfecto 
Descripción: 
Un número es perfecto si la suma de sus divisores (sin incluir él mismo) es igual al número. 
Proceso: 
1. Calcular los divisores hasta n - 1. 
2. Sumar esos valores. 
3. Comparar con n. 
Ejemplo: 
n = 6   
Divisores (sin incluir 6): 1 + 2 + 3 = 6   
→ 6 es un número perfecto. 
Salida: 
6 es un número perfecto. 
*/
function perfeccion(){
    let numero=parseInt(prompt(`Ingrese el numero a revisar`));
    let i=0;
    let suma=0;
    while(i<numero){
        if(numero%i==0){
            suma+=i;
        }
        i++
    }
    if(suma==numero){
        console.log(`EL numero ${numero} es un numero perfecto`);
    }else{
        console.log(`EL numero ${numero} no es perfecto`);
    }
}
perfeccion();