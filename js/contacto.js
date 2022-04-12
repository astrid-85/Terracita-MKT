class eleccionPlanes {
    constructor(nombre_apellido, correo_electronico, plan, cantidadTurno) {
        this.user = nombre_apellido;
        this.email = correo_electronico;
        this.plan = plan;
        this.cantidadTurno = cantidadTurno;
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

    let nombre_apellido = document.getElementById('nombre_apellido').value
    let correo_electronico = document.getElementById('correo_electronico').value
    let plan = document.getElementById('plan').value
    let cantidadTurno = document.getElementById('cantidadTurno').value

  if(!usuarioPlan.some(eleccionPlanes => eleccionPlanes.plan == plan)){
       const usuario = new eleccionPlanes(nombre_apellido, correo_electronico, plan, cantidadTurno)
        usuarioPlan.push(usuario)
        localStorage.setItem('planUsuario', JSON.stringify(usuarioPlan))
        formulario.reset()
  }
       

})


botonMostrar.addEventListener('click',  ()  => {

        usuarioPlan.forEach((eleccionPlanes, indice) => {
            divSeleccion.innerHTML= `         

            <div class="card" id="user${indice}">
        Hola ${eleccionPlanes.user}, ¿cómo estás? Elegiste el Plan: ${eleccionPlanes.plan}, 
        solicitaste esta cantidad de turno ${eleccionPlanes.cantidadTurno}.
        Responderemos en breve tu consulta a ${eleccionPlanes.email} . 
         </div>
        `
        })
    })



fetch('../js/data.json')
    .then((resp) => resp.json())
    .then((data) => console.log(data))


let piePagina = document.querySelector("#pie3  p")

piePagina.innerText = "Copyright-Terracita 2022"



