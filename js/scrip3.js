
class Presupuesto { 
    constructor(plan, servicio) {
        this.plan = plan;
        this.servicio = servicio; 
    }

    presupuestar() {
        let precio;
        switch (this.plan) {
            case 0:
                precio = 2000;
                break;
            case 1:
                precio = 1000;
                break;
            case 2:
                precio = 500;
                break;
        }
        switch (this.servicio) {
            case 0:
                precio *= 1.5;
                break;
            case 1:
                precio *= 1.4;
                break;
            case 2:
                precio *= 1.1;
                break;
            case 3:
                precio *= 1.3;
                break;
        }
        return Math.floor(precio);
    }

}
    class Interfaz{
        static capturarDatos(){
            const plan = document.getElementById("plan");
            const valorPlan = parseInt(plan.options[plan.selectedIndex].value);
            const servicio = document.getElementById("servicio");
            const valorServicio = parseInt(servicio.options[servicio.selectedIndex].value);

            return [valorPlan, valorServicio];

        }

        static validarDatos (valorPlan, valorServicio){
            return isNaN(valorPlan) || isNaN(valorServicio);
        }

        static colocarLoading(){
            const loading = document.getElementById("loading");
            loading.classList.remove("hide");
            setTimeout(()=> loading.classList.add("hide"), 1000);
        }

        static mostrarMensaje(mensaje, tipo = 'ok') {
            const div = document.createElement("div");
            const p = document.createElement("p");
            div.classList.add("mensaje");
            if (tipo ==="error"){
                div.classList.add("mensaje--error");
                p.textContent = mensaje;
            } else {
                div.classList.add("mensaje--resumen");
                p.textContent = "Tu consulta tiene el valor de:" + mensaje;
            }
            div.appendChild(p);
            document.getElementById("formulario").appendChild(div);
        }
    }
    
    const pedirPresupuesto = (e) =>{
        e.preventeDefault();
        e.stopPropagation();

        const [valorPlan, valorServicio] = Interfaz.capturarDatos();

        if (Interfaz.validarDatos(valorPlan, valorServicio)){
            Interfaz.mostrarMensaje("Por favor, complete los campos", "error");
            setTimeout(() => document.getElementsByClassName("mensaje")[0].remove(), 2000);
        }else{
            const presupuesto = new Presupuesto(valorPlan, valorServicio);

            const mensajeViejo = document.querySelector(".mensaje");
            if (mensajeViejo) mensajeViejo.remove();
            Interfaz.colocarLoading();
            setTimeout(()=> Interfaz.mostrarMensaje(presupuesto.presupuestar()), 1000);
        } 
    };

    document.getElementById("formulario").addEventListener("submit", pedirPresupuesto);