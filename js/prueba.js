
 /**let planEleccion;
let precioConsulta = 0;
let stock= document.querySelector('Servicio');
let precio ;
let ingresarPlan = document.querySelector('Planes');

let botonPlanes = document.querySelector('.botonPlanes');

class Plan {
    constructor(plan, stock, precio, descuento) {
        this.plan = plan;
        this.stock = stock;
        this.precio = precio;
        this.descuento = descuento;
    }
}

const planA = new Plan ("Estrategia", 4 , 2000 , 0.8)
const planB = new Plan ("Rediseño", 5 , 1000 , 0.7) 
const planC = new Plan ("Planificación", 10 , 500 , 0.9)

const listaPlanes = [planA, planB, planC]

 miFormulario.addEventListener ('submit', e=> {e.preventDefault()});
console.log(miFormulario)

class Interfaz{

    static capturarDatos(){
      const planValor = parseInt(Plan.input[Plan.inputIndex].value);
      return [planValor, turnoValor];
    }


}

let cantidadTurno = document.getElementById("turno");



botonPlanes.addEventListener('click',planMedida);



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

function planMedida(){

     ingresarPlan = menuElegido();

    if (ingresarPlan == planA.plan){
            stock=planA.stock;
            precio=planA.precio;
            descuento=planA.descuento;
            
        } else if (ingresarPlan == planB.plan) {
            stock=planB.stock;
            precio=planB.precio;
            descuento=planB.descuento;
            
        } else if (ingresarPlan == planC.plan) {
            stock=planC.stock;
            precio=planC.precio;
            descuento=planC.descuento;
        } 
            
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

    alert("Gracias por elegirnos. Nos estaremos poniendo en contacto con vos.")
}

let miFormulario= document.getElementById("formularioUno");

let listaPlanesMenu = "Estos son nuestros planes:"

localStorage.setItem("listaPlanesMenu", JSON.stringify(listaPlanes));



const actualizacionConsulta = [planA.precio, planB.precio, planC.precio];
const aumento = actualizacionConsulta.map(precio => precio + 1000);

 console.log(aumento);



 let piePagina = document.querySelector("#pie3  p")

 piePagina.innerText = "Copyright-Terracita 2022"

 console.log (piePagina.innerText)
*/

let contacto = document.getElementsByClassName("formularioUno");
 console.log(formularioUno);



fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))