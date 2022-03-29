function elegirPlan()
{
const seleccion=document.getElementById('Planes');
document.getElementById('plan').value=seleccion.options[seleccion.selectedIndex].text;

document.getElementById('precio').value=seleccion.options[seleccion.selectedIndex].value;
}

function cantidadTurnos(){

document.getElementById('turnos').value=seleccion.options[seleccion.selectedIndex].num;
}




