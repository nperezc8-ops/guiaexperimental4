/*
9. Contar apariciones de un carácter elegido 
o Entrada: Texto: "Examen de programación", Carácter: "m" 
o Salida: "La letra 'm' aparece 3 veces." 

*/
function palabra(){
    let frase=prompt(`ingrese la frase`);
    let caracter=prompt(`Ingrese el caracter a calcular`);
    let i=0;
    let contador=0;
    while(frase[i]!==undefined){
         if(frase[i]==caracter){
            contador++
         }
         i++
    }
    console.log(`En la frase "${frase}" La letra ${caracter} aparece ${contador} veces`)
}
palabra();