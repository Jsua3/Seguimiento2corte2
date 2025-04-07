const citas = [];

// Programar una nueva cita
function programarCita(nombrePaciente, fecha, hora, medico) {
    citas.push({id: Date.now(), nombrePaciente, fecha, hora, medico});
    alert("Cita programada con éxito.");
}

// Ver todas las citas programadas
function verCitasProgramadas() {
    if (citas.length === 0) {
        alert("No hay citas programadas.");
        return;
    }

    const resultado = citas
        .sort((a, b) => new Date(`${a.fecha} ${a.hora}`) - new Date(`${b.fecha} ${b.hora}`))
        .map(cita => `ID: ${cita.id}, Paciente: ${cita.nombrePaciente}, Fecha: ${cita.fecha}, Hora: ${cita.hora}, Médico: ${cita.medico}`)
        .join("\n");

    alert("Citas programadas:\n" + resultado);
}

// Cancelar una cita existente
function cancelarCita(id) {
    const index = citas.findIndex(cita => cita.id === id);
    if (index === -1) {
        alert("No se encontró una cita con el ID proporcionado.");
    } else {
        citas.splice(index, 1);
        alert("Cita cancelada con éxito.");
    }
}

// Menú principal
function menu() {
    const opcion = prompt(`
  1. Programar una cita
  2. Ver citas programadas
  3. Cancelar una cita
  4. Salir
  `);

    switch (opcion) {
        case "1":
            programarCita(prompt("Nombre del paciente: "), prompt("Fecha (AAAA-MM-DD): "), prompt("Hora (HH:MM): "), prompt("Médico asignado: "));
            break;
        case "2":
            verCitasProgramadas();
            break;
        case "3":
            cancelarCita(parseInt(prompt("Ingrese el ID de la cita: ")));
            break;
        case "4":
            alert("Saliendo del sistema.");
            return;
        default:
            alert("Opción no válida.");
    }
    menu();
}

menu();