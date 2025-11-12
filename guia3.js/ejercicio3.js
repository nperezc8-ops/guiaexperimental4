/*
3. Invertir un texto 
o Entrada: "Quito" 
o Salida: "otiuq"
*/
function invertir(){
    let palabra=prompt(`Ingrese la palabra `);
    let i=0;
    let invertido="";
    while(palabra[i]!==undefined){
        i++
    }
    i--
    while(i>=0){
        invertido +=palabra[i];
        i--;
    }
    console.log(`La palabra"${palabra}" invertida es ${invertido}`)
}
invertir();  