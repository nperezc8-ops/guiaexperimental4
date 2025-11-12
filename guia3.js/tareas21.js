/*

21. Concatenar palabras de un arreglo 
• Entrada: ["Me", "gusta", "programar"] 
• Salida: "Me gusta programar"
*/
function concatenear(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de palabras`));
    let i=0;
    let palabra=[];
    while(i<cantidad){
        palabra[i]=(prompt(`Ingrese la palabra ${i+1}`));
        i++
    }
    i=0;
    let frase="";
    while(i<palabra.length){
        let p=palabra[i];
        if(p!==undefined){
            frase+=p+" ";
        }
        i++
    }
    console.log(`${frase}`)
}
concatenear();