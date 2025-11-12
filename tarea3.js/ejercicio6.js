/*
1. Contar caracteres de varias frases publicitarias
Dado un arreglo con frases publicitarias, contar cuántos caracteres tiene cada una.
Entrada:
["La tecnología avanza", "Innovar para crecer", "Calidad garantizada"]
Salida:
"La tecnología avanza" → 19 caracteres  
"Innovar para crecer" → 20 caracteres  
"Calidad garantizada" → 21 caracteres
*/
function leer(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de frase que desee contar`));
    let i=0;
    let frase=[];
    while(i<cantidad){
        frase[i]=prompt(`Ingrese la frase ${i+1}`);
        i++
        }
       i=0;
        while(i<frase.length){
            let j=0; 
            let c=0;
            let p=frase[i];
            while(j<p.length){
                if(p[j]!==" "){
                    c++;
            }
            j++
        }
         console.log(`la frase ${p} tiene ${c} caracterers`);
        i++
    }
}



leer();