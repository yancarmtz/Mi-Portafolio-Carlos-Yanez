//MENU PRINCIPAL

//Enlace repositorio GITHUB
function Github() {
    // Abre la página web deseada en una nueva pestaña
    window.open('https://github.com/yancarmtz?tab=repositories', '_blank');
}

//Enlace repositorio LINKEDIN
function linkedin() {
    // Abre la página web deseada en una nueva pestaña
    window.open('https://www.linkedin.com/in/carlosya%C3%B1ezmtz/', '_blank');
}

//Enlace repositorio CURRICULUM
function Currículo() {
    // Abre la página web deseada en una nueva pestaña
    window.open('https://drive.google.com/uc?id=1ytFaHCo-TG9SFmw6DlbRAYIVJSQJeP-w&export=download', '_blank');
}

//Enlace repositorio VIDEOS NEGOCIOS LOCALES
function Edicion_video() {
    // Abre la página web deseada en una nueva pestaña
    window.open('https://videos-negocios-locales.vercel.app/', '_blank');
}


//BOTONES PAGINA ENCRIPTADOR ***********************************************************
function RepoEncript() {
    window.open('https://github.com/yancarmtz?tab=repositories/', '_blank');
}

function DemoEncript() {
    window.open('https://yancarmtz.github.io/Encriptador-texto-Alura-Challenge/', '_blank');
}

//BOTONES PAGINA NUMERO SECRETO ***********************************************************
function RepoJuegSecret() {
    window.open('https://github.com/yancarmtz/juego-secreto', '_blank');
}

function DemoJuegSecret() {
    window.open('https://yancarmtz.github.io/juego-secreto/', '_blank');
}

//BOTONES PAGINA TEMPORIZADOR ***********************************************************
function RepoTempo() {
    window.open('https://github.com/yancarmtz/temporizador', '_blank');
}

function DemoTempo() {
    window.open('https://yancarmtz.github.io/temporizador/', '_blank');
}

//BOTONES PAGINA GENERADOR DE CONTRASEÑAS ************************************************
function RepoGenerContras() {
    window.open('https://github.com/yancarmtz/AluraGeneradorContrase-a', '_blank');
}

function DemoGenerContras() {
    window.open('https://yancarmtz.github.io/AluraGeneradorContrase-a/', '_blank');
}

//BOTONES PAGINA GENERADOR DE CONTRASEÑAS ************************************************
function RepoEcommAlurageek() {
    window.open('https://github.com/yancarmtz/Ecommerce-Alurageek/tree/main', '_blank');
}

function DemoEcommAlurageek() {
    window.open('https://ecommerce-alurageek-c8q9fj2tq-yancarmtzs-projects.vercel.app/', '_blank');
}





//AQUI SE EMPIEZA A VALIDAR EL FORMULARIO DE CONTACTO

function formcontato() { //formcontrato no se encuentra en el HTML esta al final en la instruccion addeventlistener   
     //Obtener los valores de los campos del formulario
    let Nombre = (document.getElementById('nombre').value);
    let errorNombre = (document.getElementById('errorNombre'));
    let Email = (document.getElementById('email').value);
    let errorEmail = (document.getElementById('errorEmail'));
    let Asunto = (document.getElementById('asunto').value);
    let errorAsunto = (document.getElementById('errorAsunto'));
    let  Mensaje = (document.getElementById('mensaje').value);
    let errorMensaje = (document.getElementById('errorMensaje'));
    val = 0;


    //BLUR: JavaScript está utilizando la función addEventListener para agregar un evento a un elemento en tu página web. 
    //En este caso, el evento es blur, que se activa cuando el usuario hace clic fuera de un campo de entrada, como un campo de correo electrónico con el id email.
    //Cuando se dispara el evento blur en el campo de correo electrónico, se ejecuta la función anónima (sin nombre) que le sigue. Esta función puede 
    //contener código para realizar acciones específicas en respuesta a que el usuario haya dejado de enfocar ese campo de entrada. Por ejemplo, 
    //podrías validar el correo electrónico ingresado, mostrar un mensaje de error si no es válido, o realizar cualquier otra acción que desees en ese momento.
    //En resumen, esa línea de código permite detectar cuando el usuario deja de enfocar el campo de correo electrónico en la página web y ejecutar
    //acciones en respuesta a ese evento.

    // Valida el campo Nombre
    while (true) { 
        if (Nombre === '') {
            errorNombre.textContent = 'Por favor ingresa tu nombre.';
            val++;
            break; // Salir del bucle
        } else
        if (Nombre.length > 50) { // Validar máximo de 50 caracteres
            errorNombre.textContent = 'El nombre no puede tener más de 50 caracteres.';
            val++;
            break; // Salir del bucle
        } else {
            errorNombre.textContent = '';
            break; // Salir del bucle
        }
    }

    
    //BLUR: JavaScript está utilizando la función addEventListener para agregar un evento a un elemento en tu página web. 
    //En este caso, el evento es blur, que se activa cuando el usuario hace clic fuera de un campo de entrada, como un campo de correo electrónico con el id email.
    //Cuando se dispara el evento blur en el campo de correo electrónico, se ejecuta la función anónima (sin nombre) que le sigue. Esta función puede 
    //contener código para realizar acciones específicas en respuesta a que el usuario haya dejado de enfocar ese campo de entrada. Por ejemplo, 
    //podrías validar el correo electrónico ingresado, mostrar un mensaje de error si no es válido, o realizar cualquier otra acción que desees en ese momento.
    //En resumen, esa línea de código permite detectar cuando el usuario deja de enfocar el campo de correo electrónico en la página web y ejecutar
    //acciones en respuesta a ese evento.

    // Valida el campo Email
    document.getElementById('email').addEventListener('blur', function() { // blur es cuando se sale del campo de texto
        while (true) {
            if (Email === '') {
                errorEmail.textContent = 'Por favor ingresa tu email.';
                val++;
                break; // Salir del bucle
            } else if (!ValidarEmail(Email)) {
                errorEmail.textContent = 'El email ingresado no es válido.';
                val++;
                break; // Salir del bucle
            } else {
                errorEmail.textContent = '';
                break; // Salir del bucle
            }
        }
    });


    //BLUR: JavaScript está utilizando la función addEventListener para agregar un evento a un elemento en tu página web. 
    //En este caso, el evento es blur, que se activa cuando el usuario hace clic fuera de un campo de entrada, como un campo de correo electrónico con el id email.
    //Cuando se dispara el evento blur en el campo de correo electrónico, se ejecuta la función anónima (sin nombre) que le sigue. Esta función puede 
    //contener código para realizar acciones específicas en respuesta a que el usuario haya dejado de enfocar ese campo de entrada. Por ejemplo, 
    //podrías validar el correo electrónico ingresado, mostrar un mensaje de error si no es válido, o realizar cualquier otra acción que desees en ese momento.
    //En resumen, esa línea de código permite detectar cuando el usuario deja de enfocar el campo de correo electrónico en la página web y ejecutar
    //acciones en respuesta a ese evento.

    // Valida el campo Asunto
    document.getElementById('asunto').addEventListener('blur', function() { // blur es cuando se sale del campo de texto
        while (true) { 
            if (Asunto === '') {
                errorAsunto.textContent = 'Por favor ingresa el asunto.';
                val++;
                break; // Salir del bucle
            } else 
            if (Nombre.length > 50) { // Validar máximo de 50 caracteres
                errorAsunto.textContent = 'El asunto no puede tener más de 50 caracteres.';
                val++
                break; // Salir del bucle
            } else {
                errorAsunto.textContent = '';
                break; // Salir del bucle
            }
        }
    });


    //BLUR: JavaScript está utilizando la función addEventListener para agregar un evento a un elemento en tu página web. 
    //En este caso, el evento es blur, que se activa cuando el usuario hace clic fuera de un campo de entrada, como un campo de correo electrónico con el id email.
    //Cuando se dispara el evento blur en el campo de correo electrónico, se ejecuta la función anónima (sin nombre) que le sigue. Esta función puede 
    //contener código para realizar acciones específicas en respuesta a que el usuario haya dejado de enfocar ese campo de entrada. Por ejemplo, 
    //podrías validar el correo electrónico ingresado, mostrar un mensaje de error si no es válido, o realizar cualquier otra acción que desees en ese momento.
    //En resumen, esa línea de código permite detectar cuando el usuario deja de enfocar el campo de correo electrónico en la página web y ejecutar
    //acciones en respuesta a ese evento.

    // Valida el campo Mensaje
    document.getElementById('mensaje').addEventListener('blur', function() { // blur es cuando se sale del campo de texto
        while (true) { 
            if (Mensaje === '') {
                errorMensaje.textContent = 'Por favor ingresa el mensaje.';
                val++;
                break; // Salir del bucle
            } else 
            if (Mensaje.length > 300) { // Validar máximo de 300 caracteres
                errorMensaje.textContent = 'El nombre no puede tener más de 50 caracteres.';
                val++
                break; // Salir del bucle
            } else {
                errorMensaje.textContent = '';
                break; // Salir del bucle
            }
        }
    });

    
    if (Nombre === '' && !ValidarEmail(Email) && Asunto === '' && Mensaje === '') {
        // Si todos los campos están vacíos, desactivar el botón enviar formulario
        document.getElementById('btnEnviarMsj').setAttribute('disabled', 'true');
        console.log('cuando todos estan vacios');
    } else 
        if (Nombre != '' && !!ValidarEmail(Email) && Asunto != '' && Mensaje != '') {
            //EL BOTON ENVIAR FORMULARIO QUEDA ACTIVADO
            errorAsunto.textContent = '';
            errorEmail.textContent = '';
            errorNombre.textContent = '';
            errorMensaje.textContent = '';
            document.getElementById('btnEnviarMsj').removeAttribute('disabled');
            console.log('cuando todos estan informados')
        } else
            if (Nombre != '' || !ValidarEmail(Email) || Asunto != '' || Mensaje != '') {
            // Si solo un campos no están vacío, desactivar el botón enviar formulario
            document.getElementById('btnEnviarMsj').setAttribute('disabled', 'true');
            console.log('entra donde alguno esta informado');
            } else 
                // En otros casos, mantener el estado del botón según las validaciones individuales
                // Valida que los campos no esten vacios
                if (val == 0){
                    console.log(`val: ${val}`);
                    //EL BOTON ENVIAR FORMULARIO QUEDA ACTIVADO
                    document.getElementById('btnEnviarMsj').removeAttribute('disabled');
                //El boton enviar formulario se activa
                } else {    
                    //EL BOTON ENVIAR FORMULARIO SE DESACTIVADO
                    console.log('else activa boton');
                    document.getElementById('btnEnviarMsj').setAttribute('disabled','true');
                }
}

// Si se presiona alguna tecla (keyup instruccion para indicar que se presiono una tecla) en alguno de los campos del formulario se ejecuta la función formcontato
document.getElementById('nombre').addEventListener("keyup", formcontato);
document.getElementById('email').addEventListener("keyup", formcontato);
document.getElementById('asunto').addEventListener("keyup", formcontato);
document.getElementById('mensaje').addEventListener("keyup", formcontato);


function ValidarEmail(email){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



// Función para enviar el formulario
function BotonEnviar() {
    const btn = document.getElementById('btnEnviarMsj');

    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
    
       btn.textContent = 'Enviando...'; // CON TEXTCONTENT SE CAMBIA EL TEXTO DEL BOTON
    
       const serviceID = 'service_t676q0r';
       const templateID = 'template_rc9y8lg';
    
       emailjs.sendForm(serviceID, templateID, 'form', "THrTszgk4tCm636CJ")
        .then(() => {
          LimbiarCajas();
          btn.textContent = 'Enviar mensaje'; // CON TEXTCONTENT SE CAMBIA EL TEXTO DEL BOTON
        }, (err) => {
          btn.textContent = 'Enviar mensaje'; // CON TEXTCONTENT SE CAMBIA EL TEXTO DEL BOTON
          alert(JSON.stringify(err));
        });
    });
}

// SE LIMPIAN LAS CAJAS DE TEXTO INPUT
function LimbiarCajas() {
    document.getElementById('nombre').value = '';
    document.getElementById('email').value  = '';
    document.getElementById('asunto').value  = '';
    document.getElementById('mensaje').value  = '';
    alert('Mensaje enviado con exito');
}
