class Personaje {
  constructor(imagenNombre, x, y) {
    this.imagen = loadImage(imagenNombre);
    this.x = x;
    this.y = y;
  }

  mostrar() {
    image(this.imagen, this.x, this.y);
  }
}

class Aquiles extends Personaje {
  constructor() {
    super("Aquiles.png", width / 4, height / 2 + 60);
    this.velX = 0;
    this.colisiones = 0;
  }

  mostrar() {
    this.x += this.velX;
    let anchoImagen = this.imagen.width * 1.70;
    let altoImagen = this.imagen.height * 1.70;
    image(this.imagen, this.x, this.y, anchoImagen, altoImagen);
  }

  mover(velocidad) {
    this.velX = velocidad;
  }

  detener() {
    this.velX = 0;
  }

  incrementarColisiones() {
    this.colisiones++;
  }

  obtenerColisiones() {
    return this.colisiones;
  }

  resetearColisiones() {
    this.colisiones = 0;
  }
}

class Hector extends Personaje {
  constructor() {
    super("Hector.png", (3 * width) / 4, height / 2 - 4);
  }

  mostrar() {
    let anchoImagen = this.imagen.width / 2;
    let altoImagen = this.imagen.height / 2;
    image(this.imagen, this.x, this.y, anchoImagen, altoImagen);
  }

  cambiarImagen(nuevaImagen) {
    this.imagen = nuevaImagen;
  }
}
