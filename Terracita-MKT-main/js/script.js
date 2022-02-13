let nombrePersona ;
let edadPersona ;

let nombrePlanA = 'Estrategia';
let precioPlanA = 2000;
let stockTurnoA = 3 ;
let descuentoPlanA = 0.8;

let nombrePlanB = 'Rediseño';
let precioPlanB = 1000;
let stockTurnoB = 5 ;
let descuentoPlanA = 0.7;

let nombrePlanC = 'Planificación';
let precioPlanC = 500;
let stockTurnoC = 10 ;
let descuentoPlanA = 0.6;



let planEleccion = prompt(" Ingresar el Plan para consultar")
let stockTurnoA = stockTurnoA - planEleccion;

alert("Quedan" + stockTurnoA + "Estrategia");