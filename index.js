// Activar confeti al hacer clic en el botón
document.getElementById('confettiButton').onclick = function() {
    const duration = 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: ['#00bbf9', '#00f5d4', '#9b5de5', '#f15bb5', '#fee440']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

 /*
  //Funcion para colocar imagenes en posiciones aleatorias
  function positionImages(){
    const images = document.querySelectorAll('.image_card');

    images.forEach(image => {
      //Genera posiciones aleatoris dentro de la ventana
      const randomY = Math.random() * window.innerHeight;
      const randomX = Math.random() * window.innerWidth;
      
      //Asignar las posiciones a cada imagen 
      image.style.left = `${randomX}px`;
      image.style.top = `${randomY}px`;

      //Efecto de rotacion 
      const randomRotation =  Math.random() * 360;
      image.style.transform = `rotate(${randomRotation}deg)`;
    });
  }
  //Llamar a la funcion al cargar la pagina
  window.onload = positionImages;
  */
const music = document.getElementById('backgroundMusic');
const musicButton = document.getElementById('toggleMusic');

musicButton.addEventListener('click', ()=> {
  if(music.paused){
    music.play();
    musicButton.textContent = '🔊 Pausar Música';
  } else{
    music.pause();
    musicButton.textContent = '🔊 Reproducir Música';
  }
});
