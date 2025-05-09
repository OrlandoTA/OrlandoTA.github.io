window.onload = function () {
  const openGiftButton = document.getElementById("openGiftButton");
  const balloons = document.querySelectorAll(".balloon");  // Corregido el selector de .balloon
  const mensaje = document.querySelector(".mensaje");
  const mostrarImagenButton = document.querySelector("#mostrarImagenButton");
  
  

  // Ocultar globos y mensaje al inicio
  balloons.forEach(b => b.style.display = "none");
  mensaje.style.display = "none";

  openGiftButton.onclick = function () {
    // Ocultar el botón de abrir regalo
    openGiftButton.style.display = "none";

    // Mostrar globos y el mensaje
    balloons.forEach(b => b.style.display = "block");
    mensaje.style.display = "block";

    //Mostrar boton de imagen
    mostrarImagenButton.style.display = "inline";
    

    // Activar confetti de la librería (si la tenés incluida)
    const duration = 1500;
    const end = Date.now() + duration;

    (function frame() {
      window.confetti({
        particleCount: 10,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
      });
      window.confetti({
        particleCount: 10,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  

};
function mostrarImagen() {
  const imagen = document.getElementById("miImagen");
  imagen.style.display = "block";

  const mostrarImagenButton = document.getElementById("mostrarImagenButton");
  mostrarImagenButton.style.display = "none";
}
