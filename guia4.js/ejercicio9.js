/*
9. Sumas sucesivas 
Descripción: 
Realizar sumas sucesivas de un número. 
Proceso: 
1. Repetir una suma tantas veces como indique el usuario. 
2. Acumular el resultado. 
Ejemplo: 
Número = 3, Veces = 4   
3 + 3 + 3 + 3 = 12 
Salida: 
Resultado = 12
*/
function suma(){
    let numero=parseInt(prompt(`Ingrese el numero que desea sumar`));
    let veces=parseInt(prompt(`Ingrese cuantas veces lo desea`));
    let i=0;
    let original=numero
    let total=0;
       while(i<veces){
      total+=numero;
    i++
}
    console.log(`el numero es ${original} y sumandose ${veces} veces da ${total} `)
}
suma();
