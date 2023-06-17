//Link del video: https://youtu.be/0stMNFvT538
//Octavio Rodriguez, 93079/5, Comisión 5, TP 2
int tamañoCuadro = 40; // Tamaño de cada cuadro
int numCuadros = 20; // Número de cuadros a mostrar
color[] colores = {color(0, 255, 100), color(255, 0, 20), color(0), color(255, 255, 0), color(0, 100, 255), color(700, 100, 500), color(255, 50, 0)}; // Colores posibles
boolean interactivo = false; // Variable para habilitar/deshabilitar la interacción con el mouse
PImage ilusion; // Variable para la imagen

void setup() {
  size(800, 400); 
  background(255); 
  noLoop(); // El draw() no se ejecuta automáticamente
  ilusion = loadImage("Ilusion.jpg"); // Carga la imagen "Ilusion.jpg"
}

void draw() {
  background(255); 
  image(ilusion, width / 2 - ilusion.width, 0); //posicion de la imagen
  for (int i = width / 2; i < width; i += tamañoCuadro) {
    for (int j = 0; j < height; j += tamañoCuadro) { // Iterar sobre los cuadros
      int indiceColor = int(random(colores.length)); // Índice aleatorio para seleccionar un color de la lista
      fill(colores[indiceColor]); // color del cuadro actual
      rect(i, j, tamañoCuadro, tamañoCuadro); // Dibujar el cuadro

      int tipoForma = int(random(2)); // Tipo de forma: 0 para círculo, 1 para cuadro
      int tamañoForma = tamañoCuadro / 2; // Tamaño de la forma (la mitad del tamaño del cuadro)

      // Dibujar forma dentro del cuadro
      if (tipoForma == 0) {
        int indiceColorForma = int(random(colores.length)); // Índice aleatorio para seleccionar el color de la forma
        fill(colores[indiceColorForma]); // Establecer el color de la forma
        ellipse(i + tamañoCuadro / 2, j + tamañoCuadro / 2, tamañoForma, tamañoForma); // Dibujar círculo centrado en el cuadro
      } else {
        int indiceColorForma = int(random(colores.length)); // Índice aleatorio para seleccionar el color de la forma
        fill(colores[indiceColorForma]); // Establecer el color de la forma
        rect(i + tamañoCuadro / 4, j + tamañoCuadro / 4, tamañoForma, tamañoForma); // Dibujar cuadro centrado en el cuadro
      }
    }
  }
}

void mousePressed() {
  interactivo = true;
  redraw();
}

void mouseReleased() {
  interactivo = false;
}

// Función propia que no retorna un valor y tiene parámetros propios
void cambiarTamañoCuadro(int nuevoTamaño) {
  tamañoCuadro = nuevoTamaño;
}

// Función propia que retorna un valor y tiene parámetros propios
int obtenerNumeroCuadros(int nuevoNumero) {
  numCuadros = nuevoNumero;
  return numCuadros;
}

// Función para reiniciar el programa al presionar una tecla
void keyPressed() {
  if (key == 'r' || key == 'R') {
    tamañoCuadro = 40;
    numCuadros = 20;
    interactivo = false;
    loop();
  }
}
