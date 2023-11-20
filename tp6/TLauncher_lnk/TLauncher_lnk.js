let juego; 

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  frameRate(60);

  juego = new Juego(); 

  juego.estados.push(new EstadoJuego("inicio.jpg"));
  juego.estados.push(new EstadoImagen("1.png"));
  juego.estados.push(new EstadoImagen("2.png"));
  juego.estados.push(new EstadoImagen("3.png"));
  juego.estados.push(new EstadoImagen("4.jpg"));
  juego.estados.push(new EstadoImagen("5.png"));
  juego.estados.push(new EstadoImagen("5.png"));
  juego.estados.push(new EstadoImagen("6.png"));
}

function draw() {
  background(255);
  juego.estados[juego.indiceEstado].mostrar();

  if (juego.indiceEstado == 0) {
    mostrarBoton("Iniciar", width / 2, height - 240);
    mostrarBotonVerde("creditos", width / 2, height - 160);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    text("La ratita presumida", width / 2, height / 2);
  }

  if (juego.indiceEstado >= 1 && juego.indiceEstado <= 6) {
    mostrarBoton("avanzar", width - 80, height - 80);
  }

  if (juego.indiceEstado == 7) {
    mostrarBoton("A Gallo", width / 2 + 200, height - 80);
    mostrarBotonVerde("B Perro", width / 2, height - 80);
    mostrarBotonAzul("C Gato", width / 3, height - 80);
  }
}

function mostrarBoton(texto, x, y) {
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(x, y, 100, 60);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(20);
  fill(255);
  text(texto, x, y);
}

function mostrarBotonVerde(texto, x, y) {
  fill(0, 51, 0);
  rectMode(CENTER);
  rect(x, y, 100, 60);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(20);
  fill(255);
  text(texto, x, y);
}

function mostrarBotonAzul(texto, x, y) {
  fill(0, 0, 255);
  rectMode(CENTER);
  rect(x, y, 100, 60);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(20);
  fill(255);
  text(texto, x, y);
}

function mousePressed() {
  if (juego.indiceEstado == 0 && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 270 && mouseY < height - 210) {
    juego.indiceEstado = 1;
  } else if ((juego.indiceEstado >= 1 && juego.indiceEstado <= 6) && mouseX > width - 130 && mouseX < width - 30 && mouseY > height - 110 && mouseY < height - 50) {
    juego.indiceEstado = (juego.indiceEstado + 1) % juego.estados.length;
  } else if (juego.indiceEstado == 7) {
    if (mouseX > width / 2 + 150 && mouseX < width / 2 + 250 && mouseY > height - 110 && mouseY < height - 50) {
      juego.indiceEstado = (juego.indiceEstado + 1) % juego.estados.length;
    } else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      juego.indiceEstado = (juego.indiceEstado + 1) % juego.estados.length;
    } else if (mouseX > width / 6 - 50 && mouseX < width / 6 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      juego.indiceEstado = (juego.indiceEstado + 1) % juego.estados.length;
    }
  }
}

class Juego {
  constructor() {
    this.estados = [];
    this.indiceEstado = 0;
  }
}

class Estado {
  constructor(imagenFondo) {
    this.imagenFondo = loadImage(imagenFondo, () => console.log("Imagen cargada:", imagenFondo), () => console.error("Error cargando la imagen:", imagenFondo));
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
