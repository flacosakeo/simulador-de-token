function iniciar(){
    let longitudAleatoria = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
    let tiempo = 10;
    let h1Temporizador = document.getElementById('temporizador');
    let boton = document.getElementById('interaccion');
    let boton2 = document.getElementById('interaccion2');
    let boton3 = document.getElementById('interaccion3');
    let boton4 = document.getElementById('interaccion4');
    let reinicio  = document.getElementById('reinicio');
    let iniciar = document.getElementById('iniciar');
    iniciar.toggleAttribute('disabled');
    boton.removeAttribute('disabled');
    boton2.removeAttribute('disabled');
    boton3.removeAttribute('disabled');
    boton4.removeAttribute('disabled');

    console.log(longitudAleatoria)

    function generarCaracterAleatorio() {
        // Definir los caracteres posibles
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        // Devolver el carácter correspondiente al índice aleatorio
        return caracteres.charAt(indiceAleatorio);
    }

    function generarCadenaAleatoria(longitud) {
        let cadenaAleatoria = '';
        for (var i = 0; i < longitud; i++) {
            cadenaAleatoria += generarCaracterAleatorio();
        }
        return cadenaAleatoria;
    }

    let cadenaGenerada = generarCadenaAleatoria(longitudAleatoria);
    console.log(cadenaGenerada);

    function actualizarTemporizador() {
        if (tiempo > 0) {
            h1Temporizador.textContent = tiempo + " segundos de duración del token.";
            tiempo--;

        } else {
            h1Temporizador.textContent = "Token caducado.";
            clearInterval(intervalo); // Detener el intervalo cuando el temporizador termine
            cadenaGenerada = '';
            console.log(cadenaGenerada);
            iniciar.toggleAttribute('disabled');
            reinicio.removeAttribute('disabled');
            boton.toggleAttribute('disabled');
            boton2.toggleAttribute('disabled');
            boton3.toggleAttribute('disabled');
            boton4.toggleAttribute('disabled');
        }
    }

    function iniciarTemporizador() {
        tiempo = 10;
    }

    function cancelar(){
        tiempo=0;
    }

    // Agregar un evento clic al botón para reiniciar el temporizador
    boton.addEventListener('click', iniciarTemporizador);
    boton2.addEventListener('click', iniciarTemporizador);
    boton3.addEventListener('click', iniciarTemporizador);
    boton4.addEventListener('click', iniciarTemporizador);
    reinicio.addEventListener('click', cancelar);

    // Iniciar el temporizador por primera vez
    iniciarTemporizador();

    // Configurar el intervalo para actualizar el temporizador cada segundo
    var intervalo = setInterval(actualizarTemporizador, 1000);
}

