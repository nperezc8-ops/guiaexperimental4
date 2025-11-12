/*
28. Área y perímetro de círculo válido 
Leer el radio de un círculo y calcular su área y perímetro únicamente si el radio es 
mayor a 0. 
• Entrada: radio=4 
• Salida: Área≈50.27, Perímetro≈25.13 

*/
function calculo(){
    let radio=parseFloat(prompt("ingrese el valor del radio"));
    const pi=3.14
    let area= pi*radio**2;
    let perimetro=2*pi*radio;
    if(radio>0){
        console.log(`El radio del circulo es ${radio} siendo su area ${area} y su perimetro ${perimetro }`);

    }else {
        console.log(`El radio no puede ser 0 o un negativo`);
    }    
}
calculo()