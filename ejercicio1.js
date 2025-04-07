// Creamos el contenedor de datos
const statistics = {
    totalUsers: 0,
    calls: 0,
    asesorias: {
        estudiantes: 0,
        directivos: 0
    }
};

// Map para almacenar las interacciones de los usuarios
const userInteractions = new Map();

// Función para mostrar estadísticas
function showStatistics() {
    alert(
        "Estadísticas de atención:\n" +
        `Total de usuarios atendidos: ${statistics.totalUsers}\n` +
        `Llamadas telefónicas: ${statistics.calls}\n` +
        `Asesorías Estudiantes: ${statistics.asesorias.estudiantes}\n` +
        `Asesorías Directivos: ${statistics.asesorias.directivos}`
    );
}

// Función para registrar una atención
function registerAttendance() {
    const cedula = prompt("Ingrese el número de cédula:");
    const type = prompt("Seleccione el tipo de atención (1. Teléfono 2. Asesoría):");

    if (type === "1") {
        // Registro de llamada telefónica
        statistics.calls++;
        userInteractions.set(cedula, "Teléfono");
    } else if (type === "2") {
        const asesorType = prompt("Seleccione el tipo de asesoría (1. Estudiante 2. Directivo):");
        if (asesorType === "1") {
            statistics.asesorias.estudiantes++;
            userInteractions.set(cedula, "Asesoría Estudiante");
        } else if (asesorType === "2") {
            statistics.asesorias.directivos++;
            userInteractions.set(cedula, "Asesoría Directivo");
        } else {
            alert("Tipo de asesoría no válida.");
            return;
        }
    } else {
        alert("Tipo de atención no válida.");
        return;
    }

    statistics.totalUsers++;
    alert("La atención se ha registrado correctamente.");
}

// Función para transferir atención
function transferToPhone() {
    const cedula = prompt("Ingrese el número de cédula del usuario a transferir:");

    if (userInteractions.has(cedula)) {
        const previousType = userInteractions.get(cedula);

        if (previousType !== "Teléfono") {
            // Revisamos si estaba en asesoría para restar el conteo
            if (previousType === "Asesoría Estudiante") {
                statistics.asesorias.estudiantes--;
            } else if (previousType === "Asesoría Directivo") {
                statistics.asesorias.directivos--;
            }

            userInteractions.set(cedula, "Teléfono");
            statistics.calls++;
            alert("Se realizó la transferencia a llamada telefónica.");
        } else {
            alert("El usuario ya estaba registrado en llamada telefónica.");
        }
    } else {
        alert("El usuario con esta cédula no fue encontrado.");
    }
}

// Función principal del sistema
function mainMenu() {
    let option;
    do {
        option = prompt(
            "Sistema de estadísticas de atención universitaria\n" +
            "1. Registrar una atención\n" +
            "2. Transferir asesoría a llamada telefónica\n" +
            "3. Mostrar estadísticas\n" +
            "4. Salir\n" +
            "Seleccione una opción:"
        );

        switch (option) {
            case "1":
                registerAttendance();
                break;
            case "2":
                transferToPhone();
                break;
            case "3":
                showStatistics();
                break;
            case "4":
                alert("Saliendo del sistema...");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (option !== "4");
}

// Ejecutar el programa
mainMenu();
