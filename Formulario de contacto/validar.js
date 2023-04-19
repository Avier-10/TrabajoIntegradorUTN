var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");

var DatosContacto = [];

function enviarFormulario() {
  if (nombre.value === "null" || nombre.value === "") {
    alert("Hay campos incompletos ");
  } else {
    if (apellido.value === "null" || apellido.value === "") {
      alert("Hay campos incompletos ");
    } else {
      if (telefono.value === "null" || telefono.value === "") {
        alert("Hay campos incompletos ");
      } else {
        if (email.value === "null" || email.value === "") {
          alert("Hay campos incompletos");
        } else {
          alert("Se envio correctamente");

          DatosContacto.push(nombre.value);
          DatosContacto.push(apellido.value);
          DatosContacto.push(email.value);
          DatosContacto.push(telefono.value);
          if (mensaje.value === "null" || mensaje.value === "") {
            mensaje.value = "No se agrego ningun mensaje";
            DatosContacto.push(mensaje.value);
          } else {
            DatosContacto.push(mensaje.value);
          }

          alert(
            "Datos Enviados" +
              "\nNombre: " +
              DatosContacto[0] +
              "\nApellido: " +
              DatosContacto[1] +
              "\nEmail: " +
              DatosContacto[2] +
              "\nTelefono: " +
              DatosContacto[3] +
              "\nMensaje: " +
              DatosContacto[4]
          );
        }
      }
    }
  }
  return false;
}
