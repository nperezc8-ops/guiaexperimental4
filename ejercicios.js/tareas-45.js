/*

5. Clasificación de estudiantes 
Leer notas de 5 estudiantes (4 cada uno), calcular el promedio y mostrar si aprueban, 
reprueban o van a recuperación. 
• Entrada: [[60,70,80,90],[30,40,20,50]] 
• Salida: Est1=75 Aprueba, Est2=35 Reprueba 


*/
function materias(){
    let c=1;
    let promedio
    while(c<=5){
        n1=parseFloat(prompt(`ingrese sus nota 1 estudiante ${c}`));
        n2=parseFloat(prompt(`ingrese sus nota 2 estudiante ${c}`));
        n3=parseFloat(prompt(`ingrese sus nota 3 estudiante ${c}`));
        n4=parseFloat(prompt(`ingrese sus nota 4 estudiante ${c}`));
        promedio=(n1+n2+n3+n4)/4;
        if (promedio>=70){
            console.log(`Su promedio es ${promedio} por lo tanto usted aprueba`);
        }else if(promedio<70 && promedio>=40){
            console.log(`Su promedio es ${promedio} por lo tanto usted va a recuperacion`);
        }else{
            console.log(`Su promedio es ${promedio} por lo tanto usted reprueba `);

        }
        c=c+1
    }

}
materias();