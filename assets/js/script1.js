function cambiarBorde() {
  var imagen = document.getElementById("imagen");
  var estiloBorde = imagen.style.border;

  if (estiloBorde === "2px solid black") {
    // Si la imagen ya tiene borde, lo eliminamos
    imagen.style.border = "none";
  } else {
    // Si no tiene borde, agregamos un borde de 2px sólido negro
    imagen.style.border = "2px solid black";
  }
}
