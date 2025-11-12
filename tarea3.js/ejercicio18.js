/*
3. Promedio de edades: mayores vs menores de edad
Descripción:
Dada una lista con edades de personas, obtener el promedio de los mayores de edad (≥ 18) y de los menores de edad (< 18).
Entrada:
edades = [17, 20, 35, 15, 18]
Proceso:
Recorrer la lista con un ciclo for.
Separar acumuladores y contadores para mayores y menores.
Calcular los promedios correspondientes.
Salida esperada:
Promedio de mayores de edad: 24.33  
Promedio de menores de edad: 16.00

 */
function promedio(){
    let cantidades=parseInt(prompt(`Ingrese la cantidad que dese calcular`));
    let i=0;
    let edades=[];
    while(i<cantidades){
        edades[i]=parseInt(prompt(`Ingrese la edad ${i+1}`));
        i++
    }
    i=0;
      let m=0;
        let n=0;
        let totalMenor=0;
        let totalMayor=0;
        while(i<edades.length){
            let edad=edades[i];
            if(edad>=18){
                totalMayor+=edad;
                m++
            }else{
                totalMenor+=edad
                n++
            }
            i++
        }
         let promMayor=totalMayor/m;
            let promMenor=totalMenor/n;
            console.log(`la edades son ${edades},
                EL promedio de la edad mayor es  ${promMayor}
                El promedio de la edad menor es ${promMenor}`);
      

}
promedio();