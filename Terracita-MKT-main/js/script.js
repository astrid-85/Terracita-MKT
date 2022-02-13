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



let planEleccion = parseInt(prompt("Ingresar el Plan para consultar"))
stockTurnoA = parseInt(prompt("Ingresar cantidad de turno elegido"))
stockTurnoA = stockTurnoA - planEleccion;

alert("Quedan" + stockTurnoA + "Estrategia")