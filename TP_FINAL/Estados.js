
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
    super.mostrar(); 
  }
}
