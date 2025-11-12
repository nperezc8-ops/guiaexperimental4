/*
2. Contar apariciones de una vocal en cada título
Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
Entrada:
["Programación avanzada", "Desarrollo web", "Análisis de datos"]
vocal = 'a'
Salida:
"Programación avanzada" → 5 veces la 'a'  
"Desarrollo web" → 1 vez la 'a'  
"Análisis de datos" → 4 veces la 'a'
*/
function buscar(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de frases`));
    let frases=[];
    let i=0;
    while(i<cantidad){
        frases[i]=prompt(`Ingrese la frase ${i+1}`);
        i++
    }
    let letra=prompt(`Ingrese la letra que desee buscar`);
    i=0;
    while(i<frases.length){
        let p=frases[i]
        let c=0;
        let j=0;
        while(j<p.length){
        if(p[j]==letra){
            c++
        }
        j++
    }
        console.log(`La frase "${p}" tiene "${c}" veces la letra "${letra}"`);
        i++
    }
}
buscar();