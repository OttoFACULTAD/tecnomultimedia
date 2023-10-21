class Espada {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velX = 10;
    this.imagen = loadImage("espada.png", (img) => {
      img.resize(70, 50);
    });
  }

  mostrar() {
    image(this.imagen, this.x, this.y);
  }

  mover() {
    this.x += this.velX;

    if (this.x + this.imagen.width >= hector.x &&
      this.x <= hector.x + hector.imagen.width &&
      this.y + this.imagen.height >= hector.y &&
      this.y <= hector.y + hector.imagen.height) {
      vidasHector--;

      hector.cambiarImagen(loadImage("Hectorda%C3%B1ado.png"));
      setTimeout(() => {
        hector.cambiarImagen(hectorImages[imageIndex]);
      }, 1000);
    }
  }
}
