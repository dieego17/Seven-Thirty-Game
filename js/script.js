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

// Eventos


const barajarCartas = () =>{

  let aux = "";
  for(let i = 0; i < cartas.length; i++){

    let posicion1 = Math.floor(Math.random()*cartas.length);
    let posicion2 = Math.floor(Math.random()*cartas.length);

    aux = cartas[posicion1];

    cartas[posicion1] = cartas[posicion2];
    cartas[posicion2] = aux;

  }

}

document.addEventListener("DOMContentLoaded", barajarCartas);

let contador = 0.0;

const pedirCarta = (event) =>{

  
  let element = event.target;
  let posicion = Math.floor(Math.random()*cartas.length);

  let imagen = document.createElement("IMG");
  imagen.src = "./imagenes/"+cartas[posicion];
  jugador_visor.appendChild(imagen);

  let numero = parseFloat(cartas[posicion].substring(0,2));

  if(contador <= 7.5){
    if(numero >= 1 && numero <=7){

      contador += numero;

    }else if(numero >= 10 && numero <= 12){

      contador += 0.5;
    }
    jugador_titulo.textContent = contador;
    cartas.splice(posicion,1);
  }else{

    finJugador();

  }

}

pedir.addEventListener("click", pedirCarta);

const finJugador = (event) =>{

  let cartasAle = Math.floor(Math.random()*cartas.length);

  
  /* do{

    let imagen = document.createElement("IMG");
    imagen.src = "./imagenes/"+cartas[cartasAle];
    maquina_visor.appendChild(imagen);
    
  }while() */
  

}

plantarse.addEventListener("click", finJugador);

const reiniciarJuego = () =>{


}
nueva_partida.addEventListener("click", reiniciarJuego);
