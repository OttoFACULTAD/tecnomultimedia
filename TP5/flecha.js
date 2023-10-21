class Flecha {
  constructor() {
    this.x = random(width);
    this.y = -100;
    this.velY = 7;
    this.imagen = loadImage("flecha.png");
    this.imagen.resize(40, 80);
  }

  mostrar() {
    image(this.imagen, this.x, this.y);
  }

  mover() {
    this.y += this.velY;

    if (this.y > height) {
      this.x = random(width);
      this.y = 0;
    }

    if (this.x + this.imagen.width >= aquiles.x &&
      this.x <= aquiles.x + aquiles.imagen.width &&
      this.y + this.imagen.height >= aquiles.y &&
      this.y <= aquiles.y + aquiles.imagen.height) {
      aquiles.incrementarColisiones();
      this.x = random(width);
      this.y = -100;
    }
  }
}
