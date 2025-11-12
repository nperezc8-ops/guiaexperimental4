/*
Tercer sueldo menor al básico 
Leer un arreglo con 3 sueldos y verificar si el tercero es menor al salario básico (450). 
• Entrada: [500, 600, 400] 
• Salida: "El tercero es menor al básico" 
*/
function  sueldo(){
let sueldos=[];
sueldos[0]=parseFloat(prompt("Ingrese su sueldo"));
sueldos[1]=parseFloat(prompt("Ingrese su sueldo"));
sueldos[2]=parseFloat(prompt("Ingrese su sueldo"));
if (sueldos[2]<450){
    console.log(`El tercer sueldo ${sueldos[2]} es menor al salario basico(450)`) 
}else{
    console.log(`El tercer sueldo ${sueldos[2]} es mayor al basico`)
}

}
sueldo();