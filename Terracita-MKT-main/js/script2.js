/**
 variables globales. Const no cambian el dato, Let pueden variar el dato a ingresar
 **/
const nombrePlanA = "Estrategia";
const precioPlanA = 2000;
let stockTurnoA = 4;
const descuentoPlanA = 0.8;

const nombrePlanB = 'Rediseño';
const precioPlanB = 1000;
let stockTurnoB = 5;
const descuentoPlanB = 0.7;

const nombrePlanC = 'Planificación';
const precioPlanC = 500;
let stockTurnoC = 10;
const descuentoPlanC = 0.6;

let planEleccion;
let ingresarPlan;
let precioConsulta;


let nombrePersona = prompt("Ingrese su nombre y Apellido :");
let edadPersona = parseInt(prompt("Ingrese su edad:"));
let emailPersona = prompt("Ingrese su correo electrónico:");

/** Fin variables Globales */

/**Inicio Funciones */

function saludar(nombre, edad, _email) {
    alert("Hola " + nombre + ". Tu edad es: " + edad + " ¿Es correcto?")
   
}

function stockSuficiente(stock, precio, _nombre) {
    stock -= planEleccion;
    precioConsulta = planEleccion * precio;
    console.log("Quedan" + " " + stock + " " + "turnos para" + "\n" + _nombre);

}

function stockInsuficiente(stock) {
    alert("No hay turnos disponibles, consulte más tarde")

}

function planMedida(stock, precio, nombre){
    planEleccion = parseInt(prompt("Ingresar la cantidad de turnos que necesita"));
    if (planEleccion <= stock) {
        stockSuficiente(stock, precio, nombre);
        alert("El valor de la consulta es de: $" + " " + precioConsulta);

    } else {
        stockInsuficiente(stock)
    }
}
/**Fin Funciones */

/**Inicio de Evento: En el botón que ya tiene la página de CONSULTAR DESCUENTO iría este código dónde se recuperarán los datos ingresados
 * por el usuario/a y se le ofrecerá un turno y un descuento.
 */

saludar(nombrePersona, edadPersona, emailPersona)

alert("Estos son nuestro planes de trabajo \n" + nombrePlanA + "\n" + nombrePlanB + "\n" + nombrePlanC);
ingresarPlan = prompt("Ingresar nombre del Plan de trabajo que necesitas");

for (let i = 0; i < planEleccion; i++); {

    if (ingresarPlan == nombrePlanA) {
        planMedida (stockTurnoA, precioPlanA, nombrePlanA);
        

    } else if (ingresarPlan == nombrePlanB) {
        planMedida (stockTurnoB, precioPlanB, nombrePlanB);
        
    } else if (ingresarPlan == nombrePlanC) {
        planMedida (stockTurnoC, precioPlanC, nombrePlanC);
    } else {
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