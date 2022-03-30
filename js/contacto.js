let cantidadTurno=document.querySelector('turnos');
let precioConsulta = 0;
let stock=0;
let precio=document.querySelector('precio');
let ingresarPlan=document.querySelector('plan');
let botonPlanes = document.querySelector('.botonPlanes');

class Plan {
    constructor(_plan, stock, precio, descuento) {
        this.plan = _plan;
        this.stock = stock;
        this.precio = precio;
        this.descuento = descuento;
    }
}

const planA = new Plan ("Estrategia", 4 , 2000 , 0.8)
const planB = new Plan ("Rediseño", 5 , 1000 , 0.7) 
const planC = new Plan ("Planificación", 10 , 500 , 0.9)

const listaPlanes = [planA, planB, planC]

function elegirPlan()
{
const seleccion=document.getElementById('Planes');
document.getElementById('plan').value=seleccion.options[seleccion.selectedIndex].text;
document.getElementById('turnos').value=seleccion.options[seleccion.selectedIndex].num;
document.getElementById('precio').value=seleccion.options[seleccion.selectedIndex].value;
}






function stockSuficiente(stock) {
    stock -= cantidadTurno;
    console.log("Quedan" + " " + stock + " " + "turnos para" + "\n" + ingresarPlan);
}

function stockInsuficiente(_stock) {
    alert("No hay turnos disponibles, consulte más tarde")

}
function calcularPrecio(precio, descuento){
    precioConsulta += cantidadTurno * precio * descuento;
}

function planMedida(){

        ingresarPlan = elegirPlan();

    cantidadTurno();

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
            
    if (cantidadTurno<= stock) {
        
        stockSuficiente(stock,ingresarPlan);
        if(cantidadTurno > 2){
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

miFormulario.addEventListener ('submit', e=> {e.preventDefault()});
console.log(miFormulario)


fetch('../js/data.json')
.then((resp)=>resp.json())
.then((data)=>console.log(data)) 

const actualizacionConsulta = [planA.precio, planB.precio, planC.precio];
const aumento = actualizacionConsulta.map(precio => precio + 1000);

 console.log(aumento);

let contacto = document.getElementsByClassName("contactosEstilo");
 console.log(contacto);

 let piePagina = document.querySelector("#pie3  p")

 piePagina.innerText = "Copyright-Terracita 2022"

 console.log (piePagina.innerText)



 let listaPlanesMenu = "Estos son nuestros planes:"

 localStorage.setItem("listaPlanesMenu", JSON.stringify(listaPlanes));