/*
Promedio de notas 
Diseñar un programa que lea las calificaciones de 4 parciales y calcule el promedio 
f
 inal del estudiante. 
Entrada: 8, 9, 7, 10 
Salida esperada: Promedio=8.5


*/

function promedioTotal(){
let materia1= parseFloat(prompt("ingrese su calificacion 1"));
let materia2= parseFloat(prompt("ingrese su calificacion 2"));
let materia3= parseFloat(prompt("ingrese su calificacion 3"));
let materia4= parseFloat(prompt("ingrese su calificacion 4"));
let promedio=(materia1+materia2+materia3+materia4)/4;
return (`El promedio total es ${promedio}`);

}
console.log(promedioTotal());
