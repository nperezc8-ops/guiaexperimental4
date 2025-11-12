/*

2. Versión repetitiva: 
Se registran N grupos de tres hermanos. Para cada grupo, el programa debe 
determinar quién es el mayor y mostrarlo en pantalla. 
o Entrada: cantidad de grupos y edades de cada grupo. 
o Proceso: recorrer con un ciclo for/while. 
o Salida: para cada grupo, la edad mayor.

*/

function comparacion() {
    let grupos=parseInt(prompt(`ingrese la cantidad de grupos que desee calcular`));
    let c=1;
    while(c<=grupos){
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
    c++
}
}
comparacion();