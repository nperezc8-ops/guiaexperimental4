/*
3. Invertir los nombres de varios productos
Dado un arreglo con nombres de productos, mostrar cada uno invertido.
Entrada:
["Laptop", "Celular", "Tablet"]
Salida:
"Laptop" → "potpaL"  
"Celular" → "raluleC"  
"Tablet" → "telbaT"
*/
function invertir(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad de frases`));
    let i=0;
    let frases=[];
    while(i<cantidad){
        frases[i]=prompt(`Ingrese la frase ${i+1}`);
        i++
    }
    i=0;
    while(i<frases.length){
        let p=frases[i];
        let c=p.length-1
        let inv="";
        let j=0;
        while(j<p.length){
        while(c>=0){
            inv+=p[c]
            c--
        }
        j++
    }
        console.log(`la frase ${p} invertida es ${inv}`);
        i++
    
    }


}
invertir();