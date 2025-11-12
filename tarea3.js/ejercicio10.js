/*
5. Obtener iniciales de varios cargos profesionales
Dado un arreglo con nombres de cargos profesionales, obtener las iniciales de cada uno.
Entrada:
["Director General Académico", "Jefe de Laboratorio", "Asistente Administrativo"]
Salida:
"Director General Académico" → D.G.A.  
"Jefe de Laboratorio" → J.D.L.  
"Asistente Administrativo" → A.A.

*/
function inicales(){
    let cantidad=parseInt(prompt(`Ingrese la cantidad que desea`));
    let i=0;
    let frases=[];
    while(i<cantidad){
        frases[i]=prompt(`Ingrese la frase ${i+1}`);
        i++
    }
        i=0;
        while(i<frases.length){
            let frase=frases[i];
            let j=0;
            let iniciale="";
                while(j<frase.length){
                    if(j==0){   
                       iniciale+=frase[j]+",";     
                    }else if(frase[j-1]==" "){
                        iniciale+=frase[j]+",";
                    }
                    j++
                }
                console.log(`las iniciales de ${frase} son ${iniciale}`);
                i++
        }
}
inicales();