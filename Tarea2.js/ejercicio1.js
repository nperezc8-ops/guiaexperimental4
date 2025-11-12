/* 
Bloque 1: Edad mayor entre hermanos 
1. Versión condicional: 
Se registran las edades de tres hermanos. El algoritmo debe determinar quién es el 
mayor de los tres, mostrando la edad correspondiente. 
o Entrada: tres enteros (edades). 
o Proceso: usar condiciones múltiples para comparar. 
o Salida: “El hermano mayor tiene X años.”

*/
function comparacion() {
    let edad1=parseInt(prompt(`ingrese su edad 1`));
    let edad2=parseInt(prompt(`ingrese su edad 2`));
    let edad3=parseInt(prompt(`ingrese su edad 3`));
    if(edad1>edad2 && edad1>edad3){
        console.log(`El hermano mayor tiene ${edad1} años`)
    } else if(edad2>edad1 && edad2>edad3){
        console.log(`El hermano mayor tiene ${edad2} años`)
    }else if(edad3>edad1 && edad3>edad2){
        console.log(`El hermano mayor tiene ${edad3} años`)
    }else {
        console.log(`Tienen la misma edad`)
    }

}
comparacion();