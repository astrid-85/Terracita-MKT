class Planes {
    constructor(nombre, stock, precio, descuento) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.descuento = descuento;
    }
}
let formulario = document.getElementById('formularioUno')
let divPlan = document.getElementById('planElegido')
let botonPlan =document.getElementById('proyecto')

let planesUsuario = []
formulario.addEventListener('submit',(e) => {
        e.preventDefault()

        let plan = document.getElementById('plan').value
const planes = new planes (nombre, stock, precio, descuento)
plan.push(plan)
console.log(plan)

formulario.reset()

})