/*
14. Números primos en un arreglo 
• Entrada: [7, 8, 13] 
• Salida: "Números primos: 7, 13"
*/
function primos(){
    let cantidad=parseInt(prompt(`ingrese la cantidad a calcular`));
    let i=0;
    let numeros=[];
    while(i<cantidad){
        numeros[i]=parseInt(prompt(`Ingrese el numero ${i+1}`));
        i++
    }
    i=0;
    let num;
    let total=[];
    while(i<numeros.length){
        let primo=true;
        num=numeros[i];
        if(num<=1){
            primo=false
        }else{
            for(let j=2;j<num;j++){
                if(num%j==0){
                primo=false;
                break;
                }
            }
        }
        if(primo){
        total.push(num);
        console.log(`${num} es primo`);
        }else{
            console.log(`${num} no es primo`)
        } 
        i++
    }
    
       if(total.length>0){
        console.log(`Los numeros primos son ${total.join(",")}`)
       }else{
                    (`No hay numeros primos`)
       }
                   
}

primos();