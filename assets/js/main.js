//función para que la primera letra sea mayuscula
function primeraMayus(str) {
    var primera = str[0];
    if (primera != primera.toUpperCase()) {
        return true;
    }
}

//función para validar el email
function validarCorreo(email) {
    var expRegCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!expRegCorreo.test(email)) {
        return true;
    }
}

function largoMensaje(mensaje) {
    if (mensaje.length > 100) {
        return true;
    }
}

//Borrar los valores una vez que son enviados
function limpiarForm() {
    var nombre = document.getElementById('nombre').value = '';
    var email = document.getElementById('email').value = '';
    var asunto = document.getElementById('asunto').value = '';
    var mensaje = document.getElementById('mensaje').value = '';
}


function validar() {

    var valido = true;

    // Obtengo los valores entregados por el usuario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    // No pueden haber campos vacios
    if (nombre == '' || email == '' || asunto == '' || mensaje == '') {
        alert('Debes ingresar información en todos los campos');
        valido = false;
    }

    if (!primeraMayus(nombre)) {
        alert('No se permite el uso de mayusculas, ingresa de nuevo');
        valido = false;
    }

    if (validarCorreo(email)) {
        alert('Debes ingresar un correo válido. Ejem: name@domain.com');
        valido = false;
    }

    if (largoMensaje(mensaje)) {
        alert('Tu mensaje no puede tener mas de 100 caracteres');
    }

    if (valido) {
        limpiarForm();
    }

}

// Al boton inscribete agregar un evento que cambie el texto "chicas que cambian el mundo"
function cambiarMensaje() {
    var title = document.getElementById('title-home');
    title.innerHTML = "Cambiando mensaje";
}

// Al boton hackathon agregar un evento que al hacerle clic le cambie float a imagen

var toggleFloat = document.getElementById('toggle-float');

toggleFloat.addEventListener('click', makeFloat);

function makeFloat() {

    var maybeFloat = document.getElementById('maybe-float');

    if (maybeFloat.style.float !== 'right') {
        maybeFloat.style.float = 'right'
    } else {
        maybeFloat.style.float = 'none';
    }


}