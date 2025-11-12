/*
Comparar nombres de ciudades por longitud
Entrada: "Milagro" y "Guayaquil"
Salida: "La palabra 'Guayaquil' tiene más letras."
*/
function comparacion(){
    let frase1=prompt(`Ingrese la frase 1`);
    let frase2=prompt(`Ingrese la frase 2`);
    let mayor;
    if( frase1.length>frase2.length){
        mayor=frase1;
        console.log(`La palabra con mas caracteres es ${mayor}`);
    }else if(frase2.length>frase1.length){
        mayor=frase2;
        console.log(`La palabra con mas caracteres es ${mayor}`);
    }else{
        console.log(`tienen la misma cantidad`);
    }
}
comparacion();