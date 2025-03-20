  // Definimos los valores y palos posibles
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const palos = ['corazones', 'diamantes', 'treboles', 'picas'];

  // Función para generar una carta aleatoria
  function generarCarta() {
    console.log('hola dejame verte')
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
    const mapPalos = {
      corazones: { simbolo: '♥', clase: 'corazon' },
      diamantes: { simbolo: '♦', clase: 'diamante' },
      treboles: { simbolo: '♣', clase: 'treboles' },
      picas: { simbolo: '♠', clase: 'picas' },
    }
    let simboloPalo = '';

    let clasePalo = '';

    if (mapPalos[paloAleatorio]) {
      simboloPalo = mapPalos[paloAleatorio].simbolo;
      clasePalo = mapPalos[paloAleatorio].clase;
    }
    paloSuperior.className = 'palo' + 'esquina-superior-izquierda'
    paloInferior.className = 'palo' + 'esquina-inferior-derecha'

    const palosRojos = (paloAleatorio === 'corazones' || paloAleatorio === 'diamantes') ? 'red':'black';

    paloSuperior.style.color = palosRojos;

    paloInferior.style.color = palosRojos;

    console.log(document.getElementById('paloSuperior')); 
    console.log(document.getElementById('paloInferior')); 
    console.log(document.getElementById('valor'));

    // Asignamos el símbolo del palo a las posiciones correspondientes
    paloSuperior.textContent = simboloPalo;
    paloInferior.textContent = simboloPalo;

    

  }
  window.onload = generarCarta();
