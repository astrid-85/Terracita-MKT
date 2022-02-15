let nombrePersona ;
let edadPersona ;

let nombrePlanA = "Estrategia";
let stockTurnoA = 4 ;
let precioPlanA = 2000;
let descuentoPlanA = 0.8;

let nombrePlanB = 'Rediseño';
let precioPlanB = 1000;
let stockTurnoB = 5 ;
let descuentoPlanB = 0.7;

let nombrePlanC = 'Planificación';
let precioPlanC = 500;
let stockTurnoC = 10 ;
let descuentoPlanC = 0.6;

let planEleccion ;
let ingresarPlan;
let precioConsulta;

ingresarPlan = prompt ("Ingresar nombre del Plan de trabajo que necesitas");



if (ingresarPlan == nombrePlanA){
    planEleccion = parseInt (prompt("Ingresar la cantidad de turnos que necesita"));
    stockTurnoA = stockTurnoA - planEleccion;
    precioConsulta = planEleccion * precioPlanA;
    alert ("El valor de la consulta es de: $" + precioConsulta);
    console.log ( "Quedan" + " "+ stockTurnoA + " " +"turnos para Estrategia");

}
else if ( ingresarPlan == nombrePlanB){
    planEleccion = parseInt (prompt("Ingresar la cantidad de turnos que necesita"));
    stockTurnoB = stockTurnoB - planEleccion;
    precioConsulta = planEleccion * precioPlanB;
    
    alert ("El valor de la consulta es de: $" + precioConsulta);
    
    console.log ( "Quedan" + " "+ stockTurnoB + " " +"turnos para Rediseño");
}     
 else if ( ingresarPlan == nombrePlanC){
    planEleccion = parseInt (prompt("Ingresar la cantidad de turnos que necesita"));
    stockTurnoC = stockTurnoC - planEleccion;
    precioConsulta = planEleccion * precioPlanC;
    
    alert ("El valor de la consulta es de: $" + precioConsulta);
    
    console.log ( "Quedan" + " "+ stockTurnoC + " " +"turnos para Planificación");

 }
 else {
     alert("No ingresaste el nombre correcto");
 }





