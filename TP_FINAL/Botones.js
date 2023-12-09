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
