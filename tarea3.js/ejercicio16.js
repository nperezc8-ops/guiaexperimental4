/*
Bloque 4: Versión con Arreglos (versión con arreglos del bloque 3)
1. Promedio de calificaciones mayores a 70
Descripción:
Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
Entrada:
calificaciones = [65, 80, 90, 50, 75]
Proceso:
Recorrer la lista con un ciclo for.
Sumar y contar solo las calificaciones ≥ 70.
Calcular el promedio correspondiente.
Salida esperada:
Promedio de calificaciones ≥ 70: 81.67

*/
function promedio(){
    let calificaciones=parseInt(prompt(`Ingrese cuantas calificaciones desea calcular`));
    let i=0;
    let notas=[];
        while(i<calificaciones){
            notas[i]=parseFloat(prompt(`Ingrese la nota ${i+1}`));
            i++
        }
        i=0;
        let total=0;
        let c=0;
        while(i<notas.length){
            let nota=notas[i];
            if(nota>=70){
                total+=nota;
                c++
            }
            i++
        }
        let promedio=total/c;
        console.log(`El promedio de las notas ${notas} es ${promedio}`);
}
promedio();