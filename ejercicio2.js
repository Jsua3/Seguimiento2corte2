const banco = {
    colaEspera: [], // Representa la cola de espera
    contadorTurnos: 0, // Contador de turnos tomados

    // Función para tomar un turno
    tomarTurno: function () {
        this.contadorTurnos++; // Incrementa el contador
        const turno = {numero: this.contadorTurnos}; // Crea un objeto turno
        this.colaEspera.push(turno); // Lo agrega a la cola
        alert(`Turno tomado: ${turno.numero}`);
    },

    // Función para llamar al siguiente cliente
    llamarCliente: function () {
        if (this.colaEspera.length === 0) {
            alert("No hay clientes en la cola.");
            return;
        }
        const siguienteTurno = this.colaEspera.shift(); // Obtiene y elimina el primer turno
        alert(`Turno llamado: ${siguienteTurno.numero}`);
    },

    // Función para mostrar la cola de espera
    mostrarColaEspera: function () {
        if (this.colaEspera.length === 0) {
            alert("La cola de espera está vacía.");
        } else {
            const turnos = this.colaEspera.map(turno => `Turno ${turno.numero}`).join("\n");
            alert(`Turnos en la cola de espera:\n${turnos}`);
        }
    },

    // Función para mostrar el total de turnos tomados
    mostrarContador: function () {
        alert(`Total de turnos tomados: ${this.contadorTurnos}`);
    }
};

function iniciarSistema() {
    let salir = false;

    while (!salir) {
        const opcion = prompt(
            "=== Sistema de Gestión de Turnos del Banco ===\n" +
            "1. Tomar un Turno\n" +
            "2. Llamar al Cliente\n" +
            "3. Mostrar la Cola de Espera\n" +
            "4. Mostrar Contador de Turnos\n" +
            "5. Salir\n" +
            "Seleccione una opción:"
        );

        switch (opcion) {
            case "1":
                banco.tomarTurno();
                break;
            case "2":
                banco.llamarCliente();
                break;
            case "3":
                banco.mostrarColaEspera();
                break;
            case "4":
                banco.mostrarContador();
                break;
            case "5":
                alert("Saliendo del sistema...");
                salir = true;
                break;
            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
        }
    }
}

// Iniciar el sistema
iniciarSistema();