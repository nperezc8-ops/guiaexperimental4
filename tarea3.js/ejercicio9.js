/*
4. Comparar longitudes de nombres de ciudades
Dado un arreglo con nombres de ciudades, identificar cuál tiene más letras.
Entrada:
["Milagro", "Guayaquil", "Quito", "Cuenca"]
Salida:
"La ciudad con más letras es 'Guayaquil' (9 letras)."
 */
function comparar(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de cuidades`));
    let i=0;
    let ciudades=[];
    while(i<cantidad){
        ciudades[i]=prompt(`Ingrese la ciudad ${i+1}`);
        i++
    }
    let mayorCiudad="";
    let mayorLetras=0;
    i=0;
    while(i<ciudades.length){
        let ciudad = ciudades[i];
        let j = 0;
        let c = 0;

        while(j < ciudad.length){
            if(ciudad[j] !== " "){
                c++;
            }
            j++;
        }
        if(c>mayorLetras){
            mayorLetras=c;
            mayorCiudad=ciudad;
        }
        i++
}
console.log(`la ciudad con mas letras es ${mayorCiudad} con ${mayorLetras}`)
}
comparar();     
 