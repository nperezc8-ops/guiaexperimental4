/*
1. Serie de Fibonacci 
Descripción: 
Generar los primeros n términos de la serie de Fibonacci, donde cada término se obtiene 
sumando los dos anteriores. 
Proceso: 
1. Comenzar con 0 y 1. 
2. Cada nuevo valor se calcula: nuevo = anterior + actual. 
3. Repetir hasta obtener n términos. 
Ejemplo paso a paso: 
0, 1 → 1   
1, 1 → 2   
1, 2 → 3   
2, 3 → 5   
3, 5 → 8   
Entrada: 
n = 8 
Salida: 
Serie: 0, 1, 1, 2, 3, 5, 8, 13
*/
function serie(){
    let cantidad=parseInt(prompt(`Ingrese hasta que numero desea`));
    let a=0
    let b=1
    let c;
    let i=0;
    console.log(`${a}
    ${b}`)
        while(i<cantidad){
        c=a+b
        console.log(c);
        a=b;
        b=c;
        i++
    }
}
serie();