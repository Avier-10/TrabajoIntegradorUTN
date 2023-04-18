var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
function enviarFormulario() {
  console.log("Enviado");

  if (nombre.value === "null" || nombre.value === "") {
    alert("Hay campos incompletos ");
  } else {
    if (apellido.value === "null" || apellido.value === "") {
      alert("Hay campos incompletos ");
    } else {
      if (email.value === "null" || email.value === "") {
        alert("Hay campos incompletos");
      } else {
        alert("Se envio correctamente");
      }
    }
  }

  return false;
}
