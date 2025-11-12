/*Ejercicios con arreglos (sin condiciones ni ciclos) 
16. Lista de materias 
Elaborar un programa que lea los nombres de 5 materias en un arreglo y los muestre 
en una sola línea separados por comas. 
Entrada: ["Mate", "Física", "Química", "Historia", "Inglés"] 
Salida esperada: "Mate, Física, Química, Historia, Inglés"*/

function lista(){
   let materias=[];
   materias[0]=prompt("ingrese la materia 1");
   materias[1]=prompt("ingrese la materia 2");
   materias[2]=prompt("ingrese la materia 3");
   materias[3]=prompt("ingrese la materia 4");
   materias[4]=prompt("ingrese la materia 5");
   return materias.join(",");


}
console.log(lista());