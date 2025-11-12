/*
Invertir un nombre de producto
Entrada: "Laptop"
Salida: "potpaL"
*/
function invertir(){
    let frase=prompt(`ingrese la frase`);
    c=frase.length-1;
    pal="";
    while(c>=0){
        pal+=frase[c]
        c--
    }
    console.log(`${pal}`)
}
invertir();