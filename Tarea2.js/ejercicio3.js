/*

3. Versión con arreglos: 
Guardar en un arreglo de 3 posiciones las edades de los hermanos y recorrer el arreglo 
para determinar la mayor edad. 
o Entrada: arreglo de enteros. 
o Proceso: recorrer el arreglo y comparar valores. 
o Salida: edad mayor.

*/
function arreglo(){
    let grupos=parseInt(prompt(`ingrese la cantidad de grupos que desee calcular`));
    let c=1;
    let edades=[];

    while(c<=grupos){
        console.log(`GRUPO ${c}`);
    
    let i=0;
    while(i<3){
        let edad=parseInt(prompt(`Ingrese la edad del hermano ${i+1} del grupo ${c}`));
        edades.push(edad);
        i++
    }
    let mayor=edades[0];
    i=1
    while (i<edades.length){
        if (edades[i]> mayor){
            mayor=edades[i];
        }
        i++
    }
    console.log (`El hermano mayor tiene ${mayor} años`);
    c++
}
}
arreglo();