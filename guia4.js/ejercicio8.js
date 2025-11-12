/*
8. Factorial de un número 
Descripción: 
Calcular el producto de todos los enteros desde 1 hasta n. 
Proceso: 
1. Iniciar fact = 1. 
2. Multiplicar en cada paso fact = fact × i. 
3. Repetir hasta i = n. 
Ejemplo paso a paso: 
5! = 5 × 4 × 3 × 2 × 1 = 120 
Salida: 
5! = 120 
*/
function facto(){
    let numero=parseInt(prompt(`Ingrese el numero a calcular`));
    let i=1
    let facto=1;
    while(i<=numero){
       facto*=i;
        i++
    }
    console.log(`el factorial del numero ${numero} es ${facto}`);
}
facto();
