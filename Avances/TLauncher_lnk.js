class Pantallas {
  constructor() {
    this.estados = [];
    this.indiceEstado = 0;
  }

  mostrar() {
    background(255);
    this.estados[this.indiceEstado].mostrar();

    if (this.indiceEstado == 0) {
      textSize(40);
      textAlign(CENTER, CENTER);
      fill(0);
      text("La ratita presumida", width / 2, height / 2);

      // Botón "Iniciar" en la pantalla 0
      let iniciarButton = new Boton("Iniciar", width / 2, height - 240);
      iniciarButton.mostrar();
    } else {
      // Botón "Avanzar" en la parte inferior derecha para los estados mayores al 0
      let avanzarButton = new Boton("Avanzar", width - 80, height - 80);
      avanzarButton.mostrar();
    }
  }

  mousePressed() {
    if (this.indiceEstado == 0 && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 270 && mouseY < height - 210) {
      this.indiceEstado = 1;
    } else if ((this.indiceEstado >= 1 && this.indiceEstado <= 6) && mouseX > width - 130 && mouseX < width - 30 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = (this.indiceEstado + 1) % this.estados.length;
    } else if (this.indiceEstado == 7) {
      if (mouseX > width / 2 + 150 && mouseX < width / 2 + 250 && mouseY > height - 110 && mouseY < height - 50) {
        this.indiceEstado = (this.indiceEstado + 1) % this.estados.length;
      } else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 110 && mouseY < height - 50) {
        this.indiceEstado = (this.indiceEstado + 1) % this.estados.length;
      } else if (mouseX > width / 6 - 50 && mouseX < width / 6 + 50 && mouseY > height - 110 && mouseY < height - 50) {
        this.indiceEstado = (this.indiceEstado + 1) % this.estados.length;
      }
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
    this.mostrarTexto();
  }

  mostrarTexto() {
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    text(this.texto, width / 2, height / 2);
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

let pantallas;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  frameRate(60);

  pantallas = new Pantallas();

  pantallas.estados.push(new EstadoJuego("inicio.jpg"));
  pantallas.estados.push(new EstadoImagen("1.png", "Había una vez una ratita presumida \n que se creía muy bella y siempre alardeaba de eso,\n un día caminando por el bosque se encontró \n una moneda y decidió ir al mercado a gastarla."));
  pantallas.estados.push(new EstadoImagen("2.png", "'¿Qué me puedo comprar con esto?', \n se preguntó la ratita."));
  pantallas.estados.push(new EstadoImagen("3.png", "La ratita entró al \n mercado y decidió \n comprar un moño  \n rojo,  el cual es su color \n favorito, en el primer \n negocio que se encontró."));
  pantallas.estados.push(new EstadoImagen("4.jpg", "Cuando volvía a su casa, ratita \n se cruzó a un variopinto grupejo de animales: \n un gallo, un perro y un gato."));
  pantallas.estados.push(new EstadoImagen("5.png", "Ratita no sabía que cada uno \n tenía algo para ofrecerle."));
  pantallas.estados.push(new EstadoImagen("5.png", "El gallo conto que \n trabajaba en un \n granero y necesitaban \n otro empleado."));
  pantallas.estados.push(new EstadoImagen("6.png", "El perro le dijo \n que era cazador \n y le vendría bien \n una compañera de caza. Y "));
  pantallas.estados.push(new EstadoImagen("7.jpg", "Y el gato mencionó que \n era cocinero y precisaba \n un compañero de cocina."));
  pantallas.estados.push(new EstadoImagen("8.jpg", "¿Con qué animal \n se va la ratita? \n \n Seleccioná un camino."));
  pantallas.estados.push(new EstadoImagen("9.jpg", "Habiendo decidido irse con el \n gallo a la granja, la ratita alimentó \n a las gallinas, pero una la mordió \n y tuvo que ir al veterinario \n a que la curen."));
  pantallas.estados.push(new EstadoImagen("10.png", "En la veterinaria, el doctor le dijo que como \n iba a aceptar un trabajo \n que no sabía hacer \n y encima de un desconocido."));
  pantallas.estados.push(new EstadoImagen("11.jpg", "Habiéndose ido con \n el perro a cazar, \n ratita se asustó por \n los animales grandes \n y por eso \n escapo de ese lugar"));
  pantallas.estados.push(new EstadoImagen("12.jpg", "Por lo que al volver a su casa \n su madre llorando la reprendió por haberse ido \n con un perro cazador, \n que no conocía, a cazar, \n y sin saber nada del tema."));
}

function draw() {
  pantallas.mostrar();
}

function mousePressed() {
  pantallas.mousePressed();
}
