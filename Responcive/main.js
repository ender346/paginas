$(document).ready(function() {
    // Mostrar alerta de bienvenida
    Swal.fire({
      title: 'Bienvenido',
      text: '¡Gracias por visitar nuestra página de autos!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    });
  
    // Animación al enviar el formulario de contacto
    $("#contacto-form").submit(function(event) {
      event.preventDefault();
      $("button[type='submit']").html("Enviando...");
  
      // Simulación de envío de formulario
      setTimeout(function() {
        $("button[type='submit']").html("Enviado");
      }, 2000);
    });
  });
  