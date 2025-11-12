/*

Bloque 1: Ejercicios con Cadenas (10 ejercicios) 
1. Contar caracteres de una palabra 
o Entrada: "Manzana" 
o Salida: "La palabra tiene 7 letras."
*/

function contar(){
     let palabra=prompt(`INGRESE LA PALABRA`);
     let contador=0
    for(let i=0; palabra[i]!==undefined;i++){
            if(palabra[i]!==" "){
                contador=contador+1
            }
    }
    console.log(`La palabra ${palabra} tiene ${contador} caracteres`)
}
contar();