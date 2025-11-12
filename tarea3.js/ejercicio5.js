/*
Obtener iniciales de un cargo profesional
Entrada: "Director General Académico"
Salida: "D.G.A."
*/
function buscar(){
    let frase=prompt(`Ingrese la frase`);
    let i=0;
    let iniciales="";
    while(i<frase.length){
        if(i===0){
            iniciales+=frase[i]+",";
        }else if(frase[i-1]==" ")
            iniciales+=frase[i]+",";
        i++
    }
    console.log(`Las iniciales son ${iniciales}`);
}
buscar();