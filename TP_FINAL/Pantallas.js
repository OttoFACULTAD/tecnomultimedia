class Pantallas {
  constructor() {
    this.estados = [];
    this.indiceEstado = 0; 
    this.game = null
}

  mostrarPantallaInicio() {
    this.indiceEstado = 0;
    // Modifica el siguiente bloque de código
    if (this.game) {
      this.game.reiniciarJuego(); // Reinicia los valores del juego
      this.game = new Game(); // Crea una nueva instancia de Game
    
  }
  } 


  mostrar() {
    background(255);
    if (this.indiceEstado === 15) {
      if (!this.game) {
        this.game = new Game(); 
      }
      this.game.draw();
      return;
    }
    this.estados[this.indiceEstado].mostrar();

    if (this.indiceEstado == 0) {
      textSize(60);
      textAlign(CENTER, CENTER);
      fill(0);
      text("La ratita presumida", width / 2, height / 2);

    
      let creditosButton = new BotonVerde("Creditos",width / 2, height - 150 )
      creditosButton.mostrar();
      
      let iniciarButton = new Boton("Iniciar", width / 2, height - 240);
      iniciarButton.mostrar();
    } else {
  if (this.indiceEstado !== 7 && this.indiceEstado !== 9 && this.indiceEstado !== 11 && this.indiceEstado !== 13 && this.indiceEstado !=14 && this.indiceEstado !=15 && this.indiceEstado !=16) {
    
    let avanzarButton = new Boton("Avanzar", width - 80, height - 80);
    avanzarButton.mostrar();
  }
 }
if (this.indiceEstado == 7){
 let AButtom = new Boton("A GALLO", width /14, height -80);
AButtom.mostrar();

 let BButtom = new BotonAzul ("B PERRO", width /7, height -80)
 BButtom.mostrar();
 
 let CButtom = new BotonVerde ("C GATO", width /5 + 25 , height -80)
 CButtom.mostrar();
 
 let DButtom = new BotonAmarillo ("D SOLO", width /4 + 65  , height -80)
 DButtom.mostrar();
 }
if (this.indiceEstado == 9 || this.indiceEstado == 11 || this.indiceEstado == 13){
  let ReiniciarButtom = new BotonAzul ("Reiniciar", width /14, height -160);
  ReiniciarButtom.mostrar();
 }
 if (this.indiceEstado == 8 || this.indiceEstado == 9 || this.indiceEstado == 10 || this.indiceEstado == 11 || this.indiceEstado == 12 || this.indiceEstado == 13 || this.indiceEstado == 16){
   let RegresarButtom = new BotonAmarillo ("Regresar",width /14, height -80);
  RegresarButtom.mostrar();
 }
 if (this.indiceEstado == 14){
 let StartButtom = new Boton ("Start", width /2, height - 80);
 StartButtom.mostrar();
 }
}



mousePressed() {
  if (this.indiceEstado == 0 && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 270 && mouseY < height - 210) {
    this.indiceEstado = 1;
  } else if ((this.indiceEstado == 1 || this.indiceEstado == 2 || this.indiceEstado == 3 || this.indiceEstado == 4 || this.indiceEstado == 5 || this.indiceEstado == 6 || this.indiceEstado == 8 || this.indiceEstado == 10 || this.indiceEstado == 12) && mouseX > width - 130 && mouseX < width - 30 && mouseY > height - 110 && mouseY < height - 50) {
    this.indiceEstado = (this.indiceEstado + 1) % this.estados.length;
  } else if (this.indiceEstado == 7) {
    if (mouseX > width / 14 - 50 && mouseX < width / 14 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 8;
    } else if (mouseX > width / 7 - 50 && mouseX < width / 7 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 10;
    } else if (mouseX > width / 5 + 25 - 50 && mouseX < width / 5 + 25 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 12;
    }
  else if (mouseX > width / 4 + 65 - 50 && mouseX < width / 4 + 65 + 50 && mouseY > height - 110 && mouseY < height - 50) {
      this.indiceEstado = 14;
  }
} else if ((this.indiceEstado == 9 || this.indiceEstado == 11 || this.indiceEstado == 13) && mouseX > width / 14 - 50 && mouseX < width / 14 + 50 && mouseY > height - 160 && mouseY < height - 140) {
      this.indiceEstado = 0;
   }  
else if ((this.indiceEstado == 8 || this.indiceEstado == 9 || this.indiceEstado == 11 || this.indiceEstado == 13) && mouseX > width/14 - 50 && mouseX < width/14 + 80 && mouseY > height - 100 && mouseY < height - 40) {
    this.indiceEstado = (this.indiceEstado - 1) % this.estados.length;  
  }
 else if ((this.indiceEstado == 10 || this.indiceEstado == 12) && mouseX > width/14 - 50 && mouseX < width/14 + 80 && mouseY > height - 100 && mouseY < height - 40) {
   this.indiceEstado = 7;
  }
  else if ((this.indiceEstado == 16) && mouseX > width/14 - 50 && mouseX < width/14 + 80 && mouseY > height - 100 && mouseY < height - 40) {
   this.indiceEstado = 0;
  }
  else if ((this.indiceEstado == 0)&& mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 180 && mouseY < height - 120)  {
  this.indiceEstado = 16;
  
  }
  else if ((this.indiceEstado == 14) && mouseX > width /2 -50 && mouseX < width /2 + 50 && mouseY > height - 110 && mouseY > -50){
  this.indiceEstado = 15;
  }
  else if ((this.indiceEstado == 14) && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - 60 && mouseY < height){
  this.indiceEstado = 0;
  }
  if (this.indiceEstado === 15) {
      if (!this.game) {
        this.game = new Game(); // Crea una instancia de Game 
      }
      this.game.keyPressed(); 
      return;
    }
  }
keyPressed() {
    // Agrega la lógica para manejar eventos de teclado en el estado 15
    if (this.indiceEstado === 15) {
      this.game.keyPressed(); 
      return;
    }
  }
}
