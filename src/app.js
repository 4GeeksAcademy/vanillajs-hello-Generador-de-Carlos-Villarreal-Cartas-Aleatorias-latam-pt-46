import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCarta() {
  const palos = ['♥', '♦', '♠', '♣'];
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  // Generar un palo aleatorio
  const paloIndex = Math.floor(Math.random() * 4);
  const palo = palos[paloIndex];

  // Generar un valor aleatorio
  const valorIndex = Math.floor(Math.random() * 13);
  const valor = valores[valorIndex];

  // Actualizar el contenido de la carta
  const cartaDiv = document.getElementById('carta');
  const valorElement = document.getElementById('valor');
  const paloSuperiorElement = document.getElementById('paloSuperior');
  const paloInferiorElement = document.getElementById('paloInferior');

  valorElement.textContent = valor;
  paloSuperiorElement.textContent = palo;
  paloInferiorElement.textContent = palo;

  // Aplicar la clase correspondiente al palo
  cartaDiv.className = `card ${paloIndex === 0 ? 'heart' : paloIndex === 1 ? 'diamond' : paloIndex === 2 ? 'spade' : 'club'}`;
}


