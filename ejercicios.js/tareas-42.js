/*
 Áreas de varios triángulos 
Leer 10 triángulos (base y altura) y calcular su área únicamente si ambos valores son 
positivos. 
• Entrada: [(10,5), (8,-2)] 
• Salida: 25, “inválido”

*/

function triangulos (){
    let n=parseInt(prompt("ingrese la cantidad de tringulos que desee calcular "));
    let base, altura,area;
    let c=1;
    while(c<=n){
        base=parseFloat(prompt(`Ingrese el valor de la base ${c}`));
        altura=parseFloat(prompt(`Ingrese el valor de la altura ${c}`));
        area=base*altura/2
        if(base>=0 && altura>=0){
            console.log (`El area del tringulo es ${area}`);
        }else{
            console.log(`Los valores que ingresaste no son validos`);
        }
        c=c+1;
    }
}
triangulos();