
let planEleccion;
let precioConsulta = 0;
let ingresarPlan;

const planA = new Plan ("Estrategia", 4 , 2000 , 0.8)
const planB = new Plan ("Rediseño", 5 , 1000 , 0.7) 
const planC = new Plan ("Planificación", 10 , 500 , 0.9)

function cartelInicio(){
    alert("Bienvenido/a a la Terracita. Estos son nuestro planes de trabajo \n" + planA.plan + "\n" + planB.plan + "\n" + planC.plan)
}
 

function menuElegido (){
    
    ingresarPlan = prompt("Ingresar nombre del Plan de trabajo que necesitas")
   
}
/**iltrado de método avanzado arrays */

const planes= [
{plan: "Estrategia", stock: 4 , precio: 2000, descuento: 0.8},
{plan : "Rediseño", stock: 5 , precio: 1000 , descuento: 0.7},
{plan: "Planificación", stock: 10 , precio: 500 , descuento: 0.9}
 
]


/** fin método avanzado arrays */


let botonPlanes = document.querySelector('.botonPlanes')
botonPlanes.addEventListener('click',planMedida)

function Plan (_plan,stock ,precio , descuento){
    this.plan = _plan;
    this.stock = stock; 
    this.precio = precio;
    this.descuento = descuento;
}
    
function stockSuficiente(stock) {
    stock -= planEleccion;
    console.log("Quedan" + " " + stock + " " + "turnos para" + "\n" + ingresarPlan);
}

function stockInsuficiente(_stock) {
    alert("No hay turnos disponibles, consulte más tarde")

}
function calcularPrecio(precio, descuento){
    precioConsulta += planEleccion * precio * descuento;
}

function planMedida(stock, precio, ingresarPlan, descuento){

    cartelInicio()
    menuElegido(ingresarPlan)

    planEleccion = parseInt(prompt("Ingresar la cantidad de turnos que necesita"));

    if (planEleccion <= stock) {
        
        stockSuficiente(stock,ingresarPlan);
        if(planEleccion > 2){
            calcularPrecio(precio, descuento)
        }
        else {
            calcularPrecio(precio, 1)
        }

        alert("El valor de la consulta es de: $" + " " + precioConsulta);
    } 
    else {
        stockInsuficiente(stock)
    }
}

for (let i = 0; i < planEleccion; i++); {

    if (ingresarPlan == planA.plan){
        planMedida (planA.stock, planA.precio, planA.plan, planA.descuento);
        
    } else if (ingresarPlan == planB.plan) {
        planMedida (planB.stock, planB.precio, planB.plan,planB.descuento);
        
    } else if (ingresarPlan == planC.plan) {
        planMedida (planC.stock, planC.precio, planC.plan,planC.descuento);
    } 
    console.log (new Date)
}

const actualizacionConsulta = [planA.precio, planB.precio, planC.precio];
const aumento = actualizacionConsulta.map(precio => precio + 1000);

 console.log(aumento);

let contacto = document.getElementsByClassName("contactosEstilo");
 console.log(contacto);

 let piePagina = document.querySelector("#pie3  p")

 piePagina.innerText = "Copyright-Terracita 2022"

 console.log (piePagina.innerText)
 
 /** No pude mandetener el estilo de origen pero pude actualizar la fecha del Copyright de la página */
 

