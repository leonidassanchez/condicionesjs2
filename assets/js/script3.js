function validarpassword() {
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;

  var password1 = s1 + s2 + s3;

  if (password1 === "911") {
    mostrarMensaje("Password 1 es correcto");
  } else if (password1 === "714") {
    mostrarMensaje("Password 2 es correcto");
  } else {
    mostrarMensaje("Password incorrecto");
  }
}

function mostrarMensaje(mensaje) {
  var mensajeElemento = document.getElementById("mensaje");
  mensajeElemento.textContent = mensaje;
}
