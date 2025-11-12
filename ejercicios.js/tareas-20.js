/*
0. Concatenar nombres 
Crear un programa que lea un arreglo con 5 nombres y los concatene en una sola 
cadena de texto. 
Entrada: ["Ana", "Luis", "María", "Pedro", "Lucía"] 
Salida esperada: "Ana Luis María Pedro Lucía"
*/
function leer(){
    let nombres=[];
    nombres[0]=prompt("ingresen sus nombres");
    nombres[1]=prompt("ingresen sus nombres");
    nombres[2]=prompt("ingresen sus nombres");
    nombres[3]=prompt("ingresen sus nombres");
    nombres[4]=prompt("ingresen sus nombres");
    return nombres.join(" ");
    
}
console.log(leer());