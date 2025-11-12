/*
4. Comparar longitudes de cadenas 
o Entrada: "García" y "Pérez" 
o Salida: "El apellido 'García' tiene más letras."
*/
function comparar(){
    let nombre1=prompt(`Ingrese su nombre 1`);
    let nombre2=prompt(`Ingrese su nombre 2`);
    let contador1=0,contador2=0
    for(let i=0;nombre1[i]!==undefined;i++){
        contador1++
    }
    for(let j=0;nombre2[j]!==undefined;j++){
        contador2++
    }
    if(contador1>contador2){
        console.log(`El apellido ${nombre1} tiene mas letras`)
    }else if(contador2>contador1){
        console.log(`El apellido ${nombre2} tiene mas letras`)
    }else{
        console.log(`Ambos son iguales`)
    }

}
comparar();