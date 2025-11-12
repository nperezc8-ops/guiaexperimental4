/*
5. Iniciales de un nombre completo 
o Entrada: "Ana María Torres" 
o Salida: "A.M.T." 
*/
function mayusculas(){
    let nombre=prompt(`Ingrese su nombre completo`);
    let mayuscula=" ";
    for(let i=0;nombre[i]!==undefined;i++){
        if(nombre[i]>="A" && nombre[i]<="Z"){
            mayuscula+=nombre[i]+".";
        }
    }
    console.log(`el nombre complesto es "${nombre}" y sus mayusculas"${mayuscula}`);
}
mayusculas();