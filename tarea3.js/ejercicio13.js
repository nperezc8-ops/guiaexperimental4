/*
3. Promedio de edades: mayores vs menores de edad
Descripción:
Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
Entrada / Proceso:
Ingresar el número de personas n.
Leer las edades una por una con un ciclo.
Mantener contadores y acumuladores separados para mayores y menores.
Calcular los promedios respectivos.
Salida esperada:
Ingrese número de personas: 5  
Edades: 17, 20, 35, 15, 18  
Promedio de mayores de edad: 24.33  
Promedio de menores de edad: 16.00
*/
function promedio(){
    let cantidades=parseInt(prompt(`Ingrese la cantidad que dese calcular`));
    let i=0;
    let edades;
    let m=0;
        let n=0;
        let totalMenor=0;
        let totalMayor=0;
    while(i<cantidades){
        edades=parseInt(prompt(`Ingrese la edad ${i+1}`));
        if(edades>=18){
                totalMayor+=edades;
                m++
            }else{
                totalMenor+=edades;
                n++
            }
            i++
            }
            let promMayor=totalMayor/m;
            let promMenor=totalMenor/n;
            console.log(`
                EL promedio de la edad mayor es  ${promMayor}
                El promedio de la edad menor es ${promMenor}`);

}
promedio();