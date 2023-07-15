void mostrarBoton(String texto, float x, float y) {
  fill(255, 165, 0); // Color naranja suave
  rectMode(CENTER);
  rect(x, y, 80, 30);

  textAlign(CENTER, CENTER);
  fill(0);
  textFont(fuente);
  textSize(14);
  fill(255);
  text(texto, x, y);
}

void BordeDelTexto(String texto, float x, float y) {
  float offset = 1.5; // Ajusta el espaciado entre el texto y el contorno
  fill(0); // Color negro para el contorno
  text(texto, x - offset, y); // Izquierda
  text(texto, x + offset, y); // Derecha
  text(texto, x, y - offset); // Arriba
  text(texto, x, y + offset); // Abajo
  fill(255); // Color blanco para el texto
  text(texto, x, y); // Texto central
}

void mousePressed() {
  // Verificar si se hizo clic en el botón de avanzar
  if (mouseX > width - 120 && mouseX < width - 40 && mouseY > height - 55 && mouseY < height - 25) {
    if (indiceImagenActual < 12) {
      indiceImagenActual++;
    }
  }

  // Verificar si se hizo clic en el botón de retroceder
  if (mouseX > 40 && mouseX < 120 && mouseY > height - 55 && mouseY < height - 25) {
    if (indiceImagenActual > 0) {
      indiceImagenActual--;
    }
  }


if(indiceImagenActual == 0 && mouseX > width/ 4 - 40 && mouseX < width / 4 + 40  && mouseY > height - 200 && mouseY < height - 75) {
  indiceImagenActual = (int) random(13);
}


  // Verificar si se hizo clic en el botón de comenzar
  if (indiceImagenActual == 0 && mouseX > width / 2 - 40 && mouseX < width / 2 + 40 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 1;
    mostrarBotonAvanzar = true;
  }

  // Verificar si se hizo clic en el botón "SI" de la pantalla 3
  if (indiceImagenActual == 3 && mouseX > width / 2 - 120 && mouseX < width / 2 - 40 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 4; // Redirigir a la pantalla "5"
    mostrarBotonAvanzar = true;
  }

  // Verificar si se hizo clic en el botón "NO" de la pantalla 3
  if (indiceImagenActual == 3 && mouseX > width / 2 + 40 && mouseX < width / 2 + 120 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 11; // Redirigir a la pantalla "12"
    mostrarBotonAvanzar = true;
  }

  // Verificar si se hizo clic en el botón "SI" de la pantalla 7
  if (indiceImagenActual == 7 && mouseX > width / 2 - 120 && mouseX < width / 2 - 40 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 8; // Redirigir a la pantalla "9"
    mostrarBotonAvanzar = true;
  }

  // Verificar si se hizo clic en el botón "NO" de la pantalla 7
  if (indiceImagenActual == 7 && mouseX > width / 2 + 40 && mouseX < width / 2 + 120 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 9; // Redirigir a la pantalla "10"
    mostrarBotonAvanzar = true;
  }

  // Verificar si se hizo clic en el botón de reinicio en la pantalla 8, 10 y 11
  if (mostrarBotonReiniciar && mouseX > width / 2 - 40 && mouseX < width / 2 + 40 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 0; // Redirigir a la pantalla "1"
    mostrarBotonAvanzar = false;
    mostrarBotonReiniciar = false;
    
  
}

  // Verificar si se hizo clic en el botón de créditos en la pantalla 1
  if (indiceImagenActual == 0 && mouseX > width / 4 - 40 && mouseX < width / 4 + 40 && mouseY > height - 55 && mouseY < height - 25) {
    mostrarBotonCreditos = true;
  }

  if (mostrarBotonCreditos && mouseX > width / 4 - 40 && mouseX < width / 4 + 40 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 12; // Redirigir a la imagen "13.jpg"
    mostrarBotonAvanzar = false;
    mostrarBotonReiniciar = false;
    mostrarBotonCreditos = false;
  }

  // Verificar si se hizo clic en el botón de Inicio en la pantalla 13 (créditos)
  if (indiceImagenActual == 12 && mouseX > width / 2 - 40 && mouseX < width / 2 + 40 && mouseY > height - 55 && mouseY < height - 25) {
    indiceImagenActual = 0; // Regresar a la pantalla 1
    mostrarBotonAvanzar = false;
    mostrarBotonReiniciar = false;
    mostrarBotonCreditos = false;
  }

  // Desactivar el botón de créditos cuando se muestra el botón de anterior
  if (indiceImagenActual > 0 && indiceImagenActual < 12) {
    mostrarBotonCreditos = false;
  }
}
