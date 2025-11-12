/*
Promedio de calificaciones 
Crear un programa que lea un arreglo con 4 notas y calcule el promedio. 
Entrada: [8, 9, 7, 6] 
Salida esperada: 7.5


*/
function notas(){
let n=[];
n[0]=parseFloat(prompt("ingrese la nota 1"));
n[1]=parseFloat(prompt("ingrese la nota 2"));
n[2]=parseFloat(prompt("ingrese la nota 3"));
n[3]=parseFloat(prompt("ingrese la nota 4"));
let promedio=(n[0]+n[1]+n[2]+n[3])/4;
return (`El promedio es ${promedio}`);

}
console.log(notas());