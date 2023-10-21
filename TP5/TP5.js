//video: https://youtu.be/D-yLTCR8yuo
//Octavio Rodriguez, 93079/5, Comisión 5, TP 5
let estados = [];
let indiceEstado = 0;
let canvas;
let fuente;
let aquiles;
let hector;
let hectorImages = [];
let imageIndex = 0;
let espadas = [];
let vidasHector = 10;
let flechas = [];

function preload() {
  hectorImages[0] = loadImage("Hector.png");
  hectorImages[1] = loadImage("Hectorescudo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  frameRate(60);
  fuente = loadFont("Greconian.ttf");
  estados.push(new EstadoJuego("juego.jpg"));
  estados.push(new EstadoImagen("menuprincipal.jpg"));
  estados.push(new EstadoImagen("2.jpg"));
  estados.push(new EstadoImagen("3.jpg"));
  estados.push(new EstadoImagen("4.jpg"));
  estados.push(new EstadoImagen("5.jpg"));
  indiceEstado = 1;

  aquiles = new Aquiles();
  hector = new Hector();

  setInterval(cambiarImagenHector, 1000);

  for (let i = 0; i < 15; i++) {
    flechas.push(new Flecha());
  }
}

function draw() {
  estados[indiceEstado].mostrar();
  if (indiceEstado === 5) {
    mostrarBoton("Iniciar", width / 2, height - 40);
  }

  if (indiceEstado === 0) {
    aquiles.mostrar();
    hector.mostrar();
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(`Contador de daño: ${vidasHector}`, hector.x + hector.imagen.width / 4, hector.y + hector.imagen.height + 20);

    for (let i = espadas.length - 1; i >= 0; i--) {
      espadas[i].mostrar();
      espadas[i].mover();
    }

    for (let i = 0; i < flechas.length; i++) {
      flechas[i].mostrar();
      flechas[i].mover();
    }

    if (aquiles.obtenerColisiones() >= 5) {
      perdiste();
    }

    if (vidasHector <= -2000) {
      ganaste();
    }
  }
}

function keyPressed() {
  if (indiceEstado === 0) {
    if (key === 'a' || key === 'A') {
      aquiles.mover(-5);
    } else if (key === 'd' || key === 'D') {
      aquiles.mover(5);
    } else if (key === 's' || key === 'S') {
      const nuevaEspada = new Espada(aquiles.x + 80, aquiles.y + 80);
      espadas.push(nuevaEspada);
    }
  }
}

function keyReleased() {
  if (indiceEstado === 0) {
    if (key === 'a' || key === 'A' || key === 'd' || key === 'D') {
      aquiles.detener();
    }
  }
}

function mousePressed() {
  if (indiceEstado !== 0) {
    indiceEstado = (indiceEstado + 1) % estados.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mostrarBoton(texto, x, y) {
  fill(255, 165, 0);
  rectMode(CENTER);
  rect(x, y, 80, 30);
  textAlign(CENTER, CENTER);
  fill(0);
  textFont(fuente);
  textSize(14);
  fill(255);
  text(texto, x, y);
}

function cambiarImagenHector() {
  imageIndex = 1 - imageIndex;
  hector.cambiarImagen(hectorImages[imageIndex]);
}

function perdiste() {
  background(0); // Establece el fondo a un color negro
  textSize(72); // Tamaño del texto
  fill(255); // Color del texto (blanco)
  textAlign(CENTER); // Alinea el texto al centro
  let mensaje = "Perdiste!"; // Texto que quieres mostrar
  text(mensaje, width / 2, height / 2); // Dibuja el texto en el centro de la ventana
}

function ganaste() {
  background(0); // Establece el fondo a un color negro
  textSize(72); // Tamaño del texto
  fill(255); // Color del texto (blanco)
  textAlign(CENTER); // Alinea el texto al centro
  let mensaje = "Ganaste!"; // Texto que quieres mostrar
  text(mensaje, width / 2, height / 2); // Dibuja el texto en el centro de la ventana
}

class Estado {
  constructor(imagenFondo) {
    this.imagenFondo = loadImage(imagenFondo);
  }

  mostrar() {
    image(this.imagenFondo, 0, 0, width, height);
  }
}

class EstadoImagen extends Estado {
  constructor(imagenFondo) {
    super(imagenFondo);
  }
}

class EstadoJuego extends Estado {
  constructor(imagenFondo) {
    super(imagenFondo);
  }
}
