/*
8. Frase con mayor cantidad de caracteres 
o Entrada: "Me gusta el fútbol" y "Prefiero el baloncesto" 
o Salida: "La frase 'Prefiero el baloncesto' tiene más caracteres." 

*/

function frases(){
    let frase1=prompt(`ingrese la frase 1`)
    let frase2=prompt(`ingrese la frase 2`)
    let contador1=0;
    let contador2=0;
    let mayor;
    let i=0;
    let o=0;
    while(frase1[i]!==undefined){
        contador1++
        i++
    }
    while(frase2[o]!==undefined){
        contador2++
        o++
    }
    if (contador1>contador2){
        mayor=frase1;
    }else if(contador2>contador1){
        mayor=frase2;
    }else{
        console.log(`Ambos tienen las misma cantidad de caracteres`)
    }

    console.log(`La frase :${mayor} tiene mas caracteres`) 
}
frases();