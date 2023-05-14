int tamanoX = 640;
int tamanoY = 480;
int posX = 20;
int posY = 20;
int tamanoBotonX = 80;
int tamanoBotonY = 30;

void setup() {
  size(640, 480);
  background(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

void draw() {
  fill(200);
  rect(posX + tamanoBotonX/2, posY + tamanoBotonY/2, tamanoBotonX, tamanoBotonY);
  fill(0);
  text("Reiniciar", posX + tamanoBotonX/2, posY + tamanoBotonY/2);


  if (mousePressed && mouseX > posX && mouseX < posX + tamanoBotonX && mouseY > posY && mouseY < posY + tamanoBotonY) {
    reiniciar();
  }
}

void reiniciar() {
  background(255);
}
