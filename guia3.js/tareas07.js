/*
. Palabra palíndroma 
o Entrada: "radar" 
o Salida: "La palabra 'radar' es un palíndromo."
*/
function palindromo(){
    let palabra=prompt(`Ingrese la palabra`);
     let comparacion="";
        let i=0
    while(palabra[i]!==undefined){
        i++    
        }
        i--
        while(i>=0){
            comparacion+=palabra[i]+"";
            i--
        }
            if(palabra==comparacion){
                console.log(`La palabra ${palabra} es palindroma`);
             } else{
                    console(`La palabra ${palabra} no es palindroma`);
                }
            }
            palindromo();
        
    
        
