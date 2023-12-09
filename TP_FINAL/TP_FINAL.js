//Octavio Rodriguez, 93079/5, Comisión 5, TP 6
//Juan Pablo Lopez, Rajoy 91608/0, Comisión 5, TP 6
let pantallas;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  frameRate(60);

  game = new Game();
  pantallas = new Pantallas();

  pantallas.estados.push(new EstadoImagen("inicio.jpg"));
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
  pantallas.estados.push(new EstadoImagen("14.jpg"));
  pantallas.estados.push(new EstadoImagen("Creditos.jpg"));
}

function draw() {
  pantallas.mostrar();

}

function mousePressed() {
  pantallas.mousePressed();
}
function keyPressed() {
  if (pantallas && pantallas.indiceEstado === 15 && pantallas.game) {
    pantallas.game.keyPressed();
  }
}

function keyReleased() {
  if (pantallas && pantallas.indiceEstado === 15 && pantallas.game) {
    pantallas.game.keyReleased();
  }
}
