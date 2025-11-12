/*
Bloque 3: Ejercicios Individuales con Ciclos
1. Promedio de calificaciones mayores a 70
Descripción:
Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
Entrada / Proceso:
Ingresar la cantidad de calificaciones n.
Leer n notas dentro de un ciclo for.
Acumular y contar solo las notas ≥ 70.
Calcular el promedio correspondiente.
Salida esperada:
Ingrese número de calificaciones: 5  
Notas: 65, 80, 90, 50, 75  
Promedio de notas ≥ 70: 81.67
*/
function promedio(){
    let calificaciones=parseInt(prompt(`Ingrese cuantas calificaciones desea calcular`));
    let i=0;
    let nota;
      let total=0;
      let c=0;
        while(i<calificaciones){
            nota=parseFloat(prompt(`Ingrese la nota ${i+1}`));
            if(nota>=70){
                total+=nota;
                 c++
        }
        i++    
    }
    let promedios=total/c; 
    console.log(`El promedio de las notas es ${promedios}`);   
    }
promedio();
