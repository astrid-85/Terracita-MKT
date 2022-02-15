import "../js/_variable";

let nombrePersona = prompt("Ingrese su nombre y Apellido :");
let edadPersona = parseInt (prompt("Ingrese su edad:"));
let emailPersona = prompt("Ingrese su correo electrónico:");

saludar(nombrePersona, edadPersona, emailPersona)

alert ("Estos son nuestro planes de trabajo \n" + nombrePlanA+ "\n" + nombrePlanB + "\n" + nombrePlanC );
ingresarPlan = prompt ("Ingresar nombre del Plan de trabajo que necesitas");
planEleccion = parseInt (prompt("Ingresar la cantidad de turnos que necesitas"));


for( let i = 0; i < planEleccion; i++);{
if (ingresarPlan == nombrePlanA){
    planEleccion = parseInt (prompt("Ingresar la cantidad de turnos que necesita"));
   if (planEleccion <= stockTurnoA){
        stockTurnoA = stockTurnoA - planEleccion;
        precioConsulta = planEleccion * precioPlanA;
        alert ("El valor de la consulta es de: $" + precioConsulta);
   }
    else{
        stockInsuficiente (stockTurnoA)
    }
    console.log ( "Quedan" + " "+ stockTurnoA + " " +"turnos para Estrategia");

}
else if ( ingresarPlan == nombrePlanB){
    planEleccion = parseInt (prompt("Ingresar la cantidad de turnos que necesita"));
    
    if (planEleccion <= stockTurnoB){
        stockTurnoB = stockTurnoB - planEleccion;
        precioConsulta = planEleccion * precioPlanB;
        alert ("El valor de la consulta es de: $" + precioConsulta);
    }
    else{
        stockInsuficiente (stockTurnoB)
        }
    console.log ( "Quedan" + " "+ stockTurnoB + " " +"turnos para Rediseño");
}     
 else if ( ingresarPlan == nombrePlanC){
    planEleccion = parseInt (prompt("Ingresar la cantidad de turnos que necesita"));
    if (planEleccion <= stockTurnoC){
        stockTurnoC = stockTurnoC - planEleccion;
        precioConsulta = planEleccion * precioPlanC;
        alert ("El valor de la consulta es de: $" + precioConsulta);}
    else{
        stockInsuficiente (stockTurnoC)   
     }
    console.log ( "Quedan" + " "+ stockTurnoC + " " +"turnos para Planificación");

 } 

 else {
     alert("No ingresaste el nombre correcto");
 }


}



/*switch(ingresarPlan){
    case 'Estrategia':
        stockTurnoA = stockTurnoA - planEleccion;
        precioConsulta = planEleccion * precioPlanA;
        alert ("El valor de la consulta es de: $" + precioConsulta);
        console.log ( "Quedan" + " "+ stockTurnoA + " " +"turnos para Estrategia");
        break;
    case 'Rediseño':
        console.log ("Tu plan es Rediseño");
        break;
    case 'Planificación':
        console.log("Tu plan es Planificación")
        break;
    default:
        console.log("No elegiste ningun plan" + ingresarPlan)
        break
}

*/