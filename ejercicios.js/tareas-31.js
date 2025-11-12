/*
Arreglos (condicionales sin ciclos) 
31. Materia con más de 5 caracteres 
Leer un arreglo con 5 materias y mostrar si la primera tiene más de 5 caracteres. 
• Entrada: [“Mate”, “Física”, “Historia”] 
• Salida: "Física tiene más de 5 caracteres"

*/
function materias(){
    let materia=[];
    materia[0]=prompt("ingrese su materia");
    materia[1]=prompt("ingrese su materia");
    materia[2]=prompt("ingrese su materia");
    materia[3]=prompt("ingrese su materia");
    materia[4]=prompt("ingrese su materia");

    if(materia[0].length>5){
        console.log(`La materia ${materia[0]} tiene mas de 5 caracteres`);
    }else {
        console.log(`la materia ${materia[0]} no tiene mas de 5 caracteres `)
    }

} materias()