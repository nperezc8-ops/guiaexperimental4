/*

Arreglos (con ciclos) 
46. Materias largas 
Leer un arreglo de n materias y mostrar todas las que tengan más de 5 caracteres. 
• Entrada: [“Mate”, “Programación”] 
• Salida: "Programación"
*/
function largas(){
    let n=parseInt(prompt("ingrese el numero de materias"));
    let c=1;
    let materias=[];
    while(c<=n){
        materias.push(prompt(`ingrese las materias ${c}`));
    c=c+1
    }
    console.log(`las materias con mas de 5 caracteres`);
    let i=0;
    while(i<materias.length){
        if(materias[i].length>5 )
        console.log(materias[i]);
        i=i+1
    }
}
           largas()