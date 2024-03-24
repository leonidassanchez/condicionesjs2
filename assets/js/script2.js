document.addEventListener("DOMContentLoaded", function () {
  var verificarBtn = document.getElementById("verificarBtn");
  verificarBtn.addEventListener("click", verificarStickers);
});

function verificarStickers() {
  var n1 = parseInt(document.getElementById("n1").innerText);
  var n2 = parseInt(document.getElementById("n2").innerText);
  var n3 = parseInt(document.getElementById("n3").innerText);
  var suma = n1 + n2 + n3;

  var mensajeValidacion = document.getElementById("validacion");
  if (suma > 10) {
    mensajeValidacion.style.display = "block";
  } else {
    mensajeValidacion.style.display = "none";
  }
}
