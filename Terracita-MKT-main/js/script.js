
let planEleccion;
let ingresarPlan;
let precioConsulta;


let nombrePersona = prompt("Ingrese su nombre y Apellido :");
let edadPersona = parseInt(prompt("Ingrese su edad:"));
let emailPersona = prompt("Ingrese su correo electrónico:");

const planA = new Plan ("Estrategia", 4 , 2000 , 0.8)
const planB = new Plan ("Rediseño", 5 , 1000 , 0.7) 
const planC = new Plan ("Planificación", 10 , 500 , 0.6)

const listaPlanes = [planA, planB, planC]

for(const Plan of listaPlanes){
    console.log(Plan.nombre)
}

let listaPlanesMenu = "Estos son nuestro"

function Plan (nombre,stock ,precio , descuento){
    this.nombre = nombre;
    this.stock = stock; 
    this.precio = precio;
    this.descuento = descuento;
}
    
function saludar(nombre, edad, _email) {
    alert("Hola " + nombre + ". Tu edad es: " + edad + " ¿Es correcto?")
   
}
function stockSuficiente(stock, precio, _nombre) {
    stock -= planEleccion;
    precioConsulta = planEleccion * precio;
    console.log("Quedan" + " " + stock + " " + "turnos para" + "\n" + _nombre);

}

function stockInsuficiente(_stock) {
    alert("No hay turnos disponibles, consulte más tarde")

}

saludar(nombrePersona, edadPersona, emailPersona)

alert("Estos son nuestro planes de trabajo \n" + planA.nombre + "\n" + planB.nombre + "\n" + planC.nombre);
ingresarPlan = prompt("Ingresar nombre del Plan de trabajo que necesitas");




function planMedida(stock, precio, nombre){
    planEleccion = parseInt(prompt("Ingresar la cantidad de turnos que necesita"));
    if (planEleccion <= stock) {
        stockSuficiente(stock, precio, nombre);
        alert("El valor de la consulta es de: $" + " " + precioConsulta);

    } else {
        stockInsuficiente(stock)
    }
}

for (let i = 0; i < planEleccion; i++); {

    if (ingresarPlan == planA.nombre) {
        planMedida (planA.stock, planA.precio, planA.nombre);
        

    } else if (ingresarPlan == planB.nombre) {
        planMedida (planB.stock, planB.precio, planB.nombre);
        
    } else if (ingresarPlan == planC.nombre) {
        planMedida (planC.stock, planC.precio, planC.nombre);
    } else {
        alert("No ingresaste el nombre correcto");
    }


}