/*
Contar caracteres de una frase publicitaria
Entrada: "La tecnología avanza"
Salida: "La frase tiene 19 caracteres."
 
function contar(){
    let frase=prompt(`Ingrese la frase`);
    frase=frase.trim();
    let c=0;
    let contador=0;
        contador=frase.length;
    console.log(`La frase ${frase} tiene ${contador} caracteres`);
}
contar();
*/
//modo 2
    function contar2(){
        let frase=prompt(`Ingrese la frase`);
        let i=0;
        let contador=0;
        while(frase[i]!==undefined) {
            if(frase[i]!==" "){
                contador++;
            }
            i++
        }
        console.log(`La frase ${frase} tiene ${contador} caracteres-`)

}
contar2();
