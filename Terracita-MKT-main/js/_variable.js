/**
 variables globales. Const no cambian el dato, Let pueden variar el dato a ingresar
 **/
const nombrePlanA = "Estrategia";
const precioPlanA = 2000;
let stockTurnoA = 4 ;
const descuentoPlanA = 0.8;

const nombrePlanB = 'Rediseño';
const precioPlanB = 1000;
let stockTurnoB = 5 ;
const descuentoPlanB = 0.7;

const nombrePlanC = 'Planificación';
const precioPlanC = 500;
let stockTurnoC = 10 ;
const descuentoPlanC = 0.6;

let planEleccion ;
let ingresarPlan;
let precioConsulta;

let nombrePersona;
let edadPersona ;
let emailPersona ;

/** Fin variables Globales */

/** Funciones a usar en el proyecto */
function saludar (nombre, edad, email) {
    alert ("Hola"+nombre+". Tu edad es:" + edad +"¿Es correcto?")
}


function stockInsuficiente (stock){
    alert ("No hay turnos disponibles para"+ " " + stock+ ", consulte más tarde")

}

/** Fin Funciones */