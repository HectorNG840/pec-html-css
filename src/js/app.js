import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
  const btnFavorito = document.getElementById('btn-favorito');
  const textoBtn = document.getElementById('texto-btn-favorito');
  const mensajeEstado = document.getElementById('mensaje-estado');

  if (btnFavorito) {
    let guardado = false;

    btnFavorito.addEventListener('click', () => {
      guardado = !guardado;

      btnFavorito.setAttribute('aria-pressed', String(guardado));

      if (guardado) {
        textoBtn.textContent = 'Receta guardada en favoritos';
        btnFavorito.classList.add('activo');
        mensajeEstado.textContent = '¡Plato añadido a tu lista personal!';

        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.75 }
        });
      } else {
        textoBtn.textContent = 'Guardar en mis recetas favoritas';
        btnFavorito.classList.remove('activo');
        mensajeEstado.textContent = 'Receta eliminada de tu lista.';
      }
    });
  }
});