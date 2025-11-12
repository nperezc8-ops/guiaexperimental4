/*
 Áreas y perímetros de varios círculos 
Leer n radios y calcular área/perímetro únicamente si el radio es mayor a 0. 
• Entrada: [3, -1] 
• Salida: Área≈28.27, “inválido”

*/

function areas(){
    let n=parseInt(prompt("Ingrese la cantidad de radios que desea calcular"));
    let radio,area,perimetro;
    let c=1;
    const pi=3.14
    while(c<=n){
        radio=parseFloat(prompt(`"ingrese el valor del radio ${c}"`));
         area=pi*radio**2;
        perimetro=2*pi*radio;
        if(radio>0){
            console.log(`El valor del area es ${area} y del perimetro es ${perimetro}`);
        }else{
            console.log(`Los valor que ingresaste no es valido`);
        }
        c=c+1;
    }
}   
areas();