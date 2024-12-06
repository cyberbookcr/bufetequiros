function actualizarHoraYFecha() {
    const fechaActual = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    document.getElementById('fecha').textContent = `Fecha: ${fechaActual.toLocaleDateString('es-ES', opcionesFecha)}`;
    document.getElementById('hora').textContent = `Hora: ${fechaActual.toLocaleTimeString('es-ES', opcionesHora)}`;
}

function obtenerUbicacion() {
    const ubicacionElemento = document.getElementById('ubicacion');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                ubicacionElemento.textContent = `Ubicación: Latitud ${latitude.toFixed(2)}, Longitud ${longitude.toFixed(2)}`;
            },
            (error) => {
                ubicacionElemento.textContent = 'No se pudo obtener la ubicación.';
                console.error(error);
            }
        );
    } else {
        ubicacionElemento.textContent = 'Geolocalización no soportada por el navegador.';
    }
}

// Actualizar la hora y fecha cada segundo
setInterval(actualizarHoraYFecha, 1000);

// Actualizar la ubicación al presionar el botón
document.getElementById('btn-ubicacion').addEventListener('click', obtenerUbicacion);

// Inicializar datos al cargar la página
actualizarHoraYFecha();
obtenerUbicacion();
