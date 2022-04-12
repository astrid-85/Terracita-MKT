class User {
    constructor(nombre_apellido, correo_electronico, plan, cantidadTurno) {
        this.fullname = nombre_apellido;
        this.email = correo_electronico;
        this.planSelected = plan;
        this.appointment = cantidadTurno;
    }

    loguerse() {
        console.log(`${this.user}está logueado`)
    }
}