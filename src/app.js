// Definimos los valores y palos posibles
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const palos = ['corazones', 'diamantes', 'tréboles', 'picas'];

// Función para generar una carta aleatoria
function generarCarta() {
  // Seleccionamos un valor y un palo aleatorio
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];

  // Asignamos el valor a la carta
  document.getElementById('valor').textContent = valorAleatorio;

  // Asignamos el palo correspondiente
  const paloSuperior = document.getElementById('paloSuperior');
  const paloInferior = document.getElementById('paloInferior');

  // Limpiamos los palos anteriores
  paloSuperior.textContent = '';
  paloInferior.textContent = '';

  // Creamos el símbolo del palo
  let simboloPalo = '';
  switch (paloAleatorio) {
    case 'corazones':
      simboloPalo = '♥'; // Corazón
      paloSuperior.className = 'palo esquina-superior-izquierda corazon';
      paloInferior.className = 'palo esquina-inferior-derecha corazon';
      break;
    case 'diamantes':
      simboloPalo = '♦'; // Diamante
      paloSuperior.className = 'palo esquina-superior-izquierda diamante';
      paloInferior.className = 'palo esquina-inferior-derecha diamante';
      break;
    case 'tréboles':
      simboloPalo = '♣'; // Trébol
      paloSuperior.className = 'palo esquina-superior-izquierda trebol';
      paloInferior.className = 'palo esquina-inferior-derecha trebol';
      break;
    case 'picas':
      simboloPalo = '♠'; // Pica
      paloSuperior.className = 'palo esquina-superior-izquierda pica';
      paloInferior.className = 'palo esquina-inferior-derecha pica';
      break;
  }

  // Asignamos el símbolo del palo a las posiciones correspondientes
  paloSuperior.textContent = simboloPalo;
  paloInferior.textContent = simboloPalo;
}