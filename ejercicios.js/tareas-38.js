/*
. Promedio de varios grupos 
Leer 5 grupos de 3 números, calcular el promedio y mostrar si es mayor a 10. 
• Entrada: [(12,10,9), (5,5,5)] 
• Salida: "Promedio=10.3 >10", "Promedio=5 ≤10" 

*/
function promedios(){
    let n1,n2,n3,prom
    let c=1
    while(c<=5){
        n1=parseFloat(prompt(`Ingrese el 1 valor del grupo ${c}`));
        n2=parseFloat(prompt(`Ingrese el 2 valor del grupo ${c}`));
        n3=parseFloat(prompt(`Ingrese el 3 valor del grupo ${c}`));
        prom=(n1+n2+n3)/3
        if(prom>=10){
            console.log(`EL promedio ${prom} es mayor a 10`)
        }else if(prom<10){
            console.log(`El promedio ${prom} es menor a 10 `)
        }else{
            console.log(`El promedio ${prom} es igual a 10 `)   
        }
        c=c+1
    }
    }
promedios();
