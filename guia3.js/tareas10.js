/*
10. Dividir oración en palabras 
• Entrada: "Me gusta aprender programación" 
• Salida: 
• Me   
• gusta   
• aprender   
• programación   
*/
function separar(){
    let frase=prompt(`ingrese la frase a separar`);
    let i=0;
    let palabra="";
    while(frase[i]!==undefined){
        if(frase[i]==" "){
            console.log("."+palabra);
            palabra="";
        }else{
            palabra+=frase[i];
        }
        i++
    }
    if (palabra!==""){
        console.log("."+palabra)
    }
}
separar();