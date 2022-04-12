class eleccionPlanes {
    constructor(nombre_apellido, correo_electronico, plan) {
        this.user = nombre_apellido;
        this.email = correo_electronico;
        this.plan = plan;
    }

    loguerse() {
        console.log(`${this.user}está logueado`)
    }
}

let usuarioPlan = []

if (localStorage.getItem('planUsuario')) {
    usuarioPlan = JSON.parse(localStorage.getItem('planUsuario'))
} else {
    localStorage.setItem('planUsuario', JSON.stringify(usuarioPlan))
}

let formulario = document.getElementById("formularioUno")
let botonMostrar = document.getElementById("botonMostrar")
let divSeleccion = document.getElementById("seleccionPlan")


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation()


    let nombre_apellido = document.getElementById('nombre_apellido').value
    let correo_electronico = document.getElementById('correo_electronico').value
    let plan = document.getElementById('plan').value

  
        const usuario = new eleccionPlanes(nombre_apellido, correo_electronico, plan)
        usuarioPlan.push(usuario)
        localStorage.setItem('planUsuario', JSON.stringify(usuarioPlan))
        formulario.reset()
})


botonMostrar.addEventListener('click', () => {

        usuarioPlan.forEach((eleccionPlanes, indice) => {
        divSeleccion.innerHTML = `
        <div class="card" id="user${indice}" style="width 18rem;">
            <div class="card-body">
        Hola ${eleccionPlanes.user}, ¿cómo estás? Contanos por que elegiste el plan ${eleccionPlanes.plan},
        Responderemos en breve tu consulta a ${eleccionPlanes.email} 
               </div>
        </div>
        `
        
    })
 })



fetch('../js/data.json')
    .then((resp) => resp.json())
    .then((data) => console.log(data))


let piePagina = document.querySelector("#pie3  p")

piePagina.innerText = "Copyright-Terracita 2022"