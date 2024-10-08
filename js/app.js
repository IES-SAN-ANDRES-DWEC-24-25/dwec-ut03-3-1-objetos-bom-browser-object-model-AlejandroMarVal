// Author:  Carlos Tessier
// Version: 1.0
// Date:    2024/10/01

// variable ventana emergente
var myWindow;

// Variable para el  temporizador
var timer;
// Número de segundos transcurridos
var count = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Variables botones
  const btnInfo = document.getElementById("btnInfo");
  const btnUrl = document.getElementById("btnUrl");
  const btnClose = document.getElementById("btnClose");

  const url = document.getElementById("inputUrl");
  const btnBack = document.getElementById("btnBack");
  const btnForward = document.getElementById("btnForward");
  const redirection = document.getElementById("redirection");

  // Añadir eventos click a los botones

  // Muestra la información del navegador
  btnInfo.addEventListener("click", function () {
    informacionNavegador();
  });

  // Redirecciona a la URL introducida en el input a la nueva ventana mywindow
  btnUrl.addEventListener("click", function () {
    const inputUrl = url.value; 

    if (inputUrl) { 
      myWindow = window.open(inputUrl, '_blank'); 
    } else {
      myWindow = window.open('http://www.educa.jcyl.es', '_blank'); 
    }
    // si la URL no está vacía, redireccionar a www.educa.jcyl.es"
  });

  // Cierra la ventana emergente mywindow
  btnClose.addEventListener("click", function () {
    if (myWindow && !myWindow.closed) {
      myWindow.close(); 
      myWindow = null; 
    } else {
      alert('No hay ninguna ventana abierta.'); // Avisar si no hay ninguna ventana para cerrar
    }
  });

  // Retroceder en la historia del navegador
  btnBack.addEventListener("click", function () {
    history.back();
  });

  // Avanzar en la historia del navegador
  btnForward.addEventListener("click", function () {
    history.forward();
  });

  // Temoporizador
  btnStartTimer.addEventListener("click", function () {
    // Iniciar el temporizador timer cada segundo para poner en counter el valor de segundos transcurridos
    if (!timer) {
      timer = setInterval(function () {
        count++; 
        document.getElementById("counter").textContent = count; 
      }, 1000); 
    }

  });

  btnStopTimer.addEventListener("click", function () {
    // Detener el temporizador timer
    clearInterval(timer);
    timer = null;

    // con esto al darle a Detener se nos pone a 0 el contador
    // count = 0;
    // document.getElementById("counter").textContent = count;
  });

  btnRedirection.addEventListener("click", function () {
    const redirection = document.getElementById("redirection");
    // avisar en el párrafo redirection que se va a redireccionar a www.educa.jcyl.es en 5 segundos
    redirection.textContent = "se va a redireccionar a www.educa.jcyl.es en 5 segundos"
    // Redireccionar a la página de la Junta de Castilla y León en una nueva pestaña en 5 segundos
    setTimeout(function () {
      window.open('https://www.educa.jcyl.es', '_blank')
    }, 5000);
  });

  updateScreenSize();
});

// Función para actualizar el tamaño de la pantalla
function updateScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  document.getElementById("width").textContent = width;
  document.getElementById("height").textContent = height;
}

updateScreenSize();

// Evento de cambio de pantalla
// Si cambia el tamaño de la pantalla, llamamos de nuevo a la función updateScreenSize
window.onresize = updateScreenSize;

// Eventos de conexión a internet
/*
window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Desconectado';
  });
*/

/*
  window.addEventListener('COMPLETAR', () => {
    document.getElementById('status').textContent = 'Conectado';
  });
  */

// mostrar la información del navegador en una ventana emergente
function informacionNavegador() {}

// Función para redireccionar a una URL en una ventana nueva
function redirect(url) {}

// Función para mostrar los detalles del navegador
function informacionNavegador() {
  const navegadorInfo = ` Nombre del navegador: ${navigator.appName}
                          Versión: ${navigator.appVersion}
                          Plataforma: ${navigator.platform}
                          Idioma: ${navigator.language}
                          Usuario: ${navigator.userAgent}`;
  
  alert(navegadorInfo);                     
}

