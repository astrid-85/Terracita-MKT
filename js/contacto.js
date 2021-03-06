let usuarioPlan = [];

if (localStorage.getItem("planUsuario")) {
  usuarioPlan = JSON.parse(localStorage.getItem("planUsuario"));
} else {
  localStorage.setItem("planUsuario", JSON.stringify(usuarioPlan));
}

let formulario = document.getElementById("formularioUno");
let botonMostrar = document.getElementById("botonMostrar");
let divSeleccion = document.getElementById("seleccionPlan");
let enviar = document.getElementById("enviar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  let fullname = document.getElementById("nombre_apellido").value;
  let email = document.getElementById("correo_electronico").value;
  let planSelected = document.getElementById("plan").value;
  let appointment = document.getElementById("cantidadTurno").value;


  
  const usuario = new User(fullname, email, planSelected, appointment);
  usuarioPlan.push(usuario);
  localStorage.setItem("planUsuario", JSON.stringify(usuarioPlan));
  formulario.reset();
  displayMessage(user);
});

botonMostrar.addEventListener("click", () => {
  if (usuarioPlan.length) {
    usuarioPlan.forEach((user) => {
      displayMessage(user);
    });
  }
});

function displayMessage(user) {
  return (divSeleccion.innerHTML = `         

            <div class="card">
            Hola ${user.fullname}, ¿cómo estás? Elegiste el Plan: ${user.planSelected}, 
            solicitaste esta cantidad de turno ${user.appointment}.
            Responderemos en breve tu consulta a ${user.email} . 
            </div>
            `);
}



let piePagina = document.querySelector("#pie3  p");

piePagina.innerText = "Copyright-Terracita 2022";
