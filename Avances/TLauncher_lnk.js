class Pantallas {
  constructor() {
    this.estados = [];
    this.indiceEstado = 0; 
}

  mostrar() {
    background(255);
    this.estados[this.indiceEstado].mostrar();

    if (this.indiceEstado == 0) {
      textSize(60);
      textAlign(CENTER, CENTER);
      fill(0);
      text("La ratita presumida", width / 2, height / 2);

    
      let creditosButton = new BotonVerde("Creditos",width / 2, height - 150 )
      creditosButton.mostrar();
      
      let iniciarButton = new Boton("Iniciar", width / 2, height - 240);
      iniciarButton.mostrar();
    } else {
  if (this.indiceEstado !== 7 && this.indiceEstado !== 9 && this.indiceEstado !== 11 && this.indiceEstado !== 13 && this.indiceEstado !=14) {
    
    let avanzarButton = new Boton("Avanzar", width - 80, height - 80);
    avanzarButton.mostrar();
  }
 }
if (this.indiceEstado == 7){
 let AButtom = new Boton("A GALLO", width /14, height -80);
AButtom.mostrar();

 let BButtom = new BotonAzul ("B PERRO", width /7, height -80)
 BButtom.mostrar();
 
 let CButtom = new BotonVerde ("C GATO", width /5 + 25 , height -80)
 CButtom.mostrar();
 
 let DButtom = new BotonAmarillo ("D SOLO", width /4 + 65  , height -80)
 DButtom.mostrar();
 }
if (this.indiceEstado == 9 || this.indiceEstado == 11 || this.indiceEstado == 13){
  let ReiniciarButtom = new BotonAzul ("Reiniciar", width /14, height -160);
  ReiniciarButtom.mostrar();
 }
 if (this.indiceEstado == 8 || this.indiceEstado == 9 || this.indiceEstado == 10 || this.indiceEstado == 11 || this.indiceEstado == 12 || this.indiceEstado == 13){
   let RegresarButtom = new BotonAmarillo ("Regresar",width /14, height -80);
  RegresarButtom.mostrar();
 }
 if (this.indiceEstado == 14){
 let StartButtom = new Boton ("Start", width /2, height - 80);
 StartButtom.mostrar();
 }
}

mousePressed() {
  if (this.indiceEstado == 0 && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 270 && mouseY < height - 210) {
    this.indiceEstado = 1;
  } else if ((this.indiceEstado == 1 || this.indiceEstado == 2 || this.indiceEstado == 3 || this.indiceEstado == 4 || this.indiceEstado == 5 || this.indiceEstado == 6 || this.indiceEstado == 8 || this.indiceEstado == 10 || this.indiceEstado == 12) && mouseX > width - 130 && mouseX < width - 30 && mouseY > height - 110 && mouseY < height - 50) {
    this.indiceEstado = (this.indiceEstado + 1) % this.estados.length;
  } else if (this.indiceEstado == 7) {
    if (mouseX > width / 14 - 50 && mouseX < width / 14 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 8;
    } else if (mouseX > width / 7 - 50 && mouseX < width / 7 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 10;
    } else if (mouseX > width / 5 + 25 - 50 && mouseX < width / 5 + 25 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 12;
    }
  else if (mouseX > width / 4 + 65 - 50 && mouseX < width / 4 + 65 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 14;
  }
} else if ((this.indiceEstado == 9 || this.indiceEstado == 11 || this.indiceEstado == 13) && mouseX > width / 14 - 50 && mouseX < width / 14 + 50 && mouseY > height - 160 && mouseY < height - 140) {
      this.indiceEstado = 0;
   }  
else if ((this.indiceEstado == 8 || this.indiceEstado == 9 || this.indiceEstado == 11 || this.indiceEstado == 13) && mouseX > width/14 - 50 && mouseX < width/14 + 80 && mouseY > height - 100 && mouseY < height - 40) {
    this.indiceEstado = (this.indiceEstado - 1) % this.estados.length;  
  }
 else if ((this.indiceEstado == 10 || this.indiceEstado == 12) && mouseX > width/14 - 50 && mouseX < width/14 + 80 && mouseY > height - 100 && mouseY < height - 40) {
   this.indiceEstado = 7;
  }
  else if ((this.indiceEstado == 14) && mouseX > width /2 -50 && mouseX < width /2 + 50 && mouseY > height - 110 && mouseY > -50){
  this.indiceEstado = 14;
  }
 }
}
class Estado {
  constructor(imagenFondo, texto) {
    this.imagenFondo = loadImage(imagenFondo, () => console.log("Imagen cargada:", imagenFondo), () => console.error("Error cargando la imagen:", imagenFondo));
    this.texto = texto;
  }

  mostrar() {
    image(this.imagenFondo, 0, 0, width, height);
  }
}

class EstadoImagen extends Estado {
  constructor(imagenFondo, texto) {
    super(imagenFondo, texto);
  }

  mostrar() {
    super.mostrar(); // Llama al método mostrar de la clase padre para mostrar la imagen de fondo
  }
}

class EstadoJuego extends Estado {
  constructor(imagenFondo) {
    super(imagenFondo);
  }
}

class Boton {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(255, 0, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 100, 60);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text(this.texto, this.x, this.y);
  }
}
class BotonVerde {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(0, 51, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 100, 60);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text(this.texto, this.x, this.y);
  }
}
class BotonAzul {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(0, 0, 150);
    rectMode(CENTER);
    rect(this.x, this.y, 100, 60);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text(this.texto, this.x, this.y);
  }
}

class BotonAmarillo {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(216, 214, 15);
    rectMode(CENTER);
    rect(this.x, this.y, 100, 60);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text(this.texto, this.x, this.y);
  }
}

let pantallas;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  frameRate(60);

  pantallas = new Pantallas();

  pantallas.estados.push(new EstadoJuego("inicio.jpg"));
  pantallas.estados.push(new EstadoImagen("1.png"));
  pantallas.estados.push(new EstadoImagen("2.png"));
  pantallas.estados.push(new EstadoImagen("3.png"));
  pantallas.estados.push(new EstadoImagen("4.jpg"));
  pantallas.estados.push(new EstadoImagen("5.png"));
  pantallas.estados.push(new EstadoImagen("5.png"));
  pantallas.estados.push(new EstadoImagen("6.png"));
  pantallas.estados.push(new EstadoImagen("7.jpg"));
  pantallas.estados.push(new EstadoImagen("8.jpg"));
  pantallas.estados.push(new EstadoImagen("9.jpg"));
  pantallas.estados.push(new EstadoImagen("10.png"));
  pantallas.estados.push(new EstadoImagen("11.jpg"));
  pantallas.estados.push(new EstadoImagen("12.jpg"));
  pantallas.estados.push(new EstadoImagen("13.jpg"));
}

function draw() {
  pantallas.mostrar();
}

function mousePressed() {
  pantallas.mousePressed();
}
