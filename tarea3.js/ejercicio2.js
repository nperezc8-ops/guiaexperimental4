/*
Contar apariciones de una vocal en un título
Entrada: "Programación avanzada"
Salida: "La vocal 'a' aparece 5 veces."
*/
function contar (){
    let frase=prompt(`Ingrese la frase`);
    let vocal=prompt(`Ingrese la vocal que busca`)
    let i=0;
    let c=0;
    while(frase[i]!==undefined){
        frase=frase.toLowerCase();
        if(frase[i]==vocal){
            c++
        }
        i++
    }
    console.log(`En la frase " ${frase} " la vocal " ${vocal} " aparece " ${c} " veces.`)

}
contar();