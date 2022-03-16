class Presupuesto {
    constructor(tamanio, servicio) {
        this.tamanio = tamanio;
        this.servicio = servicio;
    }

    //Función que calcula el presupuesto total
    presupuestar() {
        let precio;
        switch (this.tamanio) {
            case 0:
                precio = 500;
                break;
            case 1:
                precio = 700;
                break;
            case 2:
                precio = 800;
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

class Interfaz {
    //Función que captura los datos y los devuelve limpios para ser utilizados
    static capturarDatos() {
        const tamanio = document.getElementById("tamanio");
        const valorTamanio = parseInt(tamanio.options[tamanio.selectedIndex].value);
        const servicio = document.getElementById("servicio");
        const valorServicio = parseInt(servicio.options[servicio.selectedIndex].value);
        //Hago destructuring, más info en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        return [valorTamanio, valorServicio];
    }

    static validarDatos(valorTamanio, valorServicio) {
        return isNaN(valorTamanio) || isNaN(valorServicio);
    }

    static colocarLoading() {
        //Capturo el loading
        const loading = document.getElementById("loading");
        //Lo dejo de ocultar quitándole la clase hide
        loading.classList.remove("hide");
        //Al segundo lo vuelvo a ocultar poniéndole la clase hide
        setTimeout(() => loading.classList.add("hide"), 1000);
    }

    static mostrarMensaje(mensaje, tipo = 'ok') {
        //Creo un div con la clase mensaje para poder capturarlo luego más fácilmente cuando quiera borrarlo 
        const div = document.createElement("div");
        //Creo un p para colocar el resultado 
        const p = document.createElement("p");
        div.classList.add("mensaje");
        if (tipo === "error") {
            div.classList.add("mensaje--error");
            p.textContent = mensaje;
        } else {
            div.classList.add("mensaje--resumen");
            p.textContent = "total: " + mensaje;
        }
        div.appendChild(p);
        document.getElementById("formulario").appendChild(div);
    }
}

const pedirPresupuesto = (e) => {
    //Prevengo que se envíe la información y se recargue la pantalla
    e.preventDefault();
    e.stopPropagation();
    //Almaceno los datos limpios en dos variables. Ver destructuring
    const [valorTamanio, valorServicio] = Interfaz.capturarDatos();

    if (Interfaz.validarDatos(valorTamanio, valorServicio)) {
        //Muestro un mensaje de tipo error por 2 segundos
        Interfaz.mostrarMensaje("Por favor, complete los campos", "error");
        setTimeout(() => document.getElementsByClassName("mensaje")[0].remove(), 2000);
    } else {
        //Creo un nuevo presupuesto (que podría almacenar en localStorage, por ejemplo)
        const presupuesto = new Presupuesto(valorTamanio, valorServicio);
        //Si hay un mensaje previo lo capturo y lo borro
        const mensajeViejo = document.querySelector(".mensaje");
        if (mensajeViejo) mensajeViejo.remove();
        //Coloco un loading para que no aparezca el resultado tan repentinamente
        Interfaz.colocarLoading();
        //Al mismo tiempo que se va el loading hago aparecer el mensaje con el presupuesto
        setTimeout(() => Interfaz.mostrarMensaje(presupuesto.presupuestar()), 1000);
    }
};

document.getElementById("formulario").addEventListener("submit", pedirPresupuesto);