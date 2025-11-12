/*
2. Contar apariciones de una letra específica 
o Entrada: "Me encanta el café" 
o Salida: "La letra 'e' aparece 4 veces." 
*/
function aparicion(){
      let frase=prompt(`ingrese su frase`);
         let letra=prompt(`ingrese la letra que desea contar`);
         let contador=0;
         let i=0
        while(frase[i]!==undefined){
            if(frase[i].toLowerCase()==letra.toLowerCase()){
                contador++
            }
            i++
        }
      
    console.log(`La frase "${frase}" tiene: ${contador} ${letra}`)
        
           
}
aparicion();