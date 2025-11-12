/*
6. Reemplazo de caracteres 
o Entrada: "Programador" 
o Salida: "Pr#gramad#r"
*/
function reemplazo(){
    let palabra=prompt(`Ingrese la palabra`);
    remplazo="";
    for(let i=0;palabra[i]!==undefined;i++){
        if(palabra[i]!=="o"){
            remplazo+=palabra[i]+""
        }else{
            remplazo+="#"
        }
    }
    console.log(`La plabra es ${palabra} y con su remplazo es ${remplazo}`);
}
reemplazo()