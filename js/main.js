// === Animaciones al hacer scroll ===
const elementos = document.querySelectorAll('.fade-in');

function mostrarElementos() {
  const trigger = window.innerHeight * 0.85;
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
}

window.addEventListener('scroll', mostrarElementos);
window.addEventListener('load', mostrarElementos);

// === Contador regresivo ===
const fechaObjetivo = new Date('December 19, 2025 15:30:00').getTime();
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia < 0) return;

  const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const h = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diferencia % (1000 * 60)) / 1000);

  dias.textContent = d;
  horas.textContent = h;
  minutos.textContent = m;
  segundos.textContent = s;
}, 1000);
