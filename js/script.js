//  Array de cartas
let cartas = [
  "01oros.jpg",
  "02oros.jpg",
  "03oros.jpg",
  "04oros.jpg",
  "05oros.jpg",
  "06oros.jpg",
  "07oros.jpg",
  "10oros.jpg",
  "11oros.jpg",
  "12oros.jpg",
  "01bastos.jpg",
  "02bastos.jpg",
  "03bastos.jpg",
  "04bastos.jpg",
  "05bastos.jpg",
  "06bastos.jpg",
  "07bastos.jpg",
  "10bastos.jpg",
  "11bastos.jpg",
  "12bastos.jpg",
  "01espadas.jpg",
  "02espadas.jpg",
  "03espadas.jpg",
  "04espadas.jpg",
  "05espadas.jpg",
  "06espadas.jpg",
  "07espadas.jpg",
  "10espadas.jpg",
  "11espadas.jpg",
  "12espadas.jpg",
  "01copas.jpg",
  "02copas.jpg",
  "03copas.jpg",
  "04copas.jpg",
  "05copas.jpg",
  "06copas.jpg",
  "07copas.jpg",
  "10copas.jpg",
  "11copas.jpg",
  "12copas.jpg",
];

// Para añadir las cartas
let jugador_visor = document.getElementById("jugador_visor");
let maquina_visor = document.getElementById("maquina_visor");

// Textos de salida
let jugador_titulo = document.getElementById("jugador_titulo");
let maquina_titulo = document.getElementById("maquina_titulo");

// Botones
let pedir = document.getElementById("pedir");
let plantarse = document.getElementById("plantarse");
let nueva_partida = document.getElementById("nueva_partida");

// Variables globales para guardar la jugada del jugador y de la máquina
let jugada = 0;
let jugadaJugador = 0;


// Funciones


// Funciones
const barajarCartas = () =>{
  for(let i=0; i< cartas.length; i++){

    let posicion1= Math.floor(Math.random() * cartas.length)
    let posicion2= Math.floor(Math.random() * cartas.length)

    let aux = cartas[posicion1]

    cartas[posicion1]=cartas[posicion2]
    cartas[posicion2]=aux

  }
}

let sumaTot=0
let sumaMaq=0
let random= Math.floor(Math.random() * cartas.length)

const pedirCarta = () =>{
  
  let nombreCarta = cartas[random]

    //Crear cartas
    let carta = document.createElement('IMG')
    carta.src="./imagenes/"+cartas[random]
    jugador_visor.appendChild(carta)

    //Suma del visor del jugador
    let numeroCarta = parseFloat(nombreCarta.substring(0, 2))

    if (numeroCarta >= 1 && numeroCarta <= 7) {
      sumaTot += numeroCarta;
    } else if (numeroCarta >= 10 && numeroCarta <= 12) {
      sumaTot += 0.5
    }
    jugador_titulo.textContent=sumaTot

    //Borrar carta del array
    cartas.splice(random, 1)
    
    //En caso de que al pedir cartas te pases de 7.5
    if (sumaTot > 7.5) {
      let carta = document.createElement('IMG')
      carta.src="./imagenes/"+cartas[random]
      jugador_visor.appendChild(carta)

      nueva_partida.classList.add("mostrar")
      plantarse.classList.add("ocultar")
      pedir.classList.add("ocultar")

      maquina_visor.appendChild(carta)

      let numeroCartaMaq = parseFloat(carta.src.substring(43,45))
      if (numeroCartaMaq >= 1 && numeroCartaMaq <= 7) {
        sumaMaq = numeroCartaMaq
      } else if (numeroCartaMaq >= 10 && numeroCartaMaq <= 12) {
        sumaMaq = 0.5
      }
      
      maquina_titulo.textContent = "Gana la máquina con "+sumaMaq+" puntos"
    }
}

const finJugador = () => {
  let numeroDeCartas= Math.max(1,Math.floor(Math.random() * 5))

  for (let i = 0; i < numeroDeCartas; i++) {

    let randomIndex = Math.floor(Math.random() * cartas.length)
    let cartaNombre = cartas[randomIndex]

    let cartaImg = document.createElement('img')
    cartaImg.src = "./imagenes/" + cartaNombre
    maquina_visor.appendChild(cartaImg)

    let numeroCarta = parseFloat(cartaNombre.substring(0, 2))
    if (numeroCarta >= 1 && numeroCarta <= 7) {
      sumaMaq += numeroCarta
    } else if (numeroCarta >= 10 && numeroCarta <= 12) {
      sumaMaq += 0.5
    }
    maquina_titulo.textContent = sumaMaq
  }
  nueva_partida.classList.add("mostrar")
  plantarse.classList.add("ocultar")
  pedir.classList.add("ocultar")

  if (sumaMaq > sumaTot && sumaMaq<7.5) {
    maquina_titulo.textContent = "Gana la máquina con "+sumaMaq+" puntos"
  } else if (sumaTot < 7.5 && sumaTot!=0) {
    jugador_titulo.textContent = "Gana el jugador con "+sumaTot+" puntos"
  } else if (sumaMaq=7.5 && sumaTot==7.5) {
    maquina_titulo.textContent = "Gana la máquina con "+sumaMaq+" puntos"
  }
}

const reiniciarJuego = () => {
  sumaTot = 0
  sumaMaq = 0

  jugador_visor.innerHTML = ""
  maquina_visor.innerHTML = ""

  cartas = [
    "01oros.jpg",
    "02oros.jpg",
    "03oros.jpg",
    "04oros.jpg",
    "05oros.jpg",
    "06oros.jpg",
    "07oros.jpg",
    "10oros.jpg",
    "11oros.jpg",
    "12oros.jpg",
    "01bastos.jpg",
    "02bastos.jpg",
    "03bastos.jpg",
    "04bastos.jpg",
    "05bastos.jpg",
    "06bastos.jpg",
    "07bastos.jpg",
    "10bastos.jpg",
    "11bastos.jpg",
    "12bastos.jpg",
    "01espadas.jpg",
    "02espadas.jpg",
    "03espadas.jpg",
    "04espadas.jpg",
    "05espadas.jpg",
    "06espadas.jpg",
    "07espadas.jpg",
    "10espadas.jpg",
    "11espadas.jpg",
    "12espadas.jpg",
    "01copas.jpg",
    "02copas.jpg",
    "03copas.jpg",
    "04copas.jpg",
    "05copas.jpg",
    "06copas.jpg",
    "07copas.jpg",
    "10copas.jpg",
    "11copas.jpg",
    "12copas.jpg",
  ];

  barajarCartas()

  nueva_partida.classList.remove("mostrar")
  plantarse.classList.remove("ocultar")
  pedir.classList.remove("ocultar")

  jugador_titulo.textContent = ""
  maquina_titulo.textContent = ""
}

// Eventos
document.addEventListener("DOMContentLoaded", barajarCartas);
pedir.addEventListener("click", pedirCarta);
plantarse.addEventListener("click", finJugador);
nueva_partida.addEventListener("click", reiniciarJuego);