class Game {
  constructor() {
    this.enemigos = [];
    this.bullets = [];
    this.enemySpeed = 4;
    this.isGameOver = false;
    this.gameStarted = true;
    this.score = 0;
    this.player = new Player();
    this.timeRemaining = 60; // Agregamos el contador con un valor inicial de 400
    this.finalState = new EstadoImagen("final.jpg");
    this.finalState2 = new EstadoImagen("final2.jpg");

// Iniciar el intervalo del temporizador
    this.timer = setInterval(this.updateTimer.bind(this), 1000);
   
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        let x = i * 60 + 50;
        let y = j * 40 + 50;
        this.enemigos.push(new Enemy(x, y));
      }
    }
  }
    reiniciarJuego() {
    this.enemigos = [];
    this.enemySpeed = 1;
    this.isGameOver = false;
    this.gameStarted = true;
    this.score = 0;
    this.player = new Player();
    this.timeRemaining = 50;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        let x = i * 60 + 50;
        let y = j * 40 + 50;
        this.enemigos.push(new Enemy(x, y));
      }
    }
  }
  
  getEnemySpeed() {
    return this.enemySpeed;
  }
  
  updateTimer() {
    if (this.timeRemaining > 0) {
      this.timeRemaining--;
    } else {
      this.isGameOver = true;
      clearInterval(this.timer);
    }
  }
  draw() {
    background(0);

    // Dibujar el contador arriba a la derecha
    fill(255);
    textSize(20);
    textAlign(RIGHT, TOP); // Alineamos a la derecha y arriba
    text("Tiempo: " + this.timeRemaining, width - 20, 10);

    // Verificar si el contador llegó a cero y no se ha mostrado la pantalla de victoria
    if (this.timeRemaining === 0 && !this.mostrandoPantallaVictoria) {
      this.isGameOver = true;
      this.PantallaPerder();
    }

    if (this.score >= 3600) {
      this.mostrarPantallaVictoria();
      return;
    }

    this.player.show();
    this.player.move();


    for (let bullet of this.bullets) {
      bullet.show();
      bullet.move();
      for (let i = 0; i < this.enemigos.length; i++) {

        if (bullet.hits(this.enemigos[i])) {
          this.bullets.splice(this.bullets.indexOf(bullet), 1);
          this.enemigos.splice(this.enemigos.indexOf(this.enemigos[i]), 1);
          this.score += 50;
        }
      }
    }
    for (let i = 0; i <   this.enemigos.length; i++) {
      this.enemigos[i].show()
        this.enemigos[i].move()

        if (this.enemigos[i].y > height - 40) {
        this.isGameOver = true;
      }
    }

    if (this.isGameOver) {
      this.PantallaPerder();
    }

    if (this.enemigos.length === 0) {
      this.enemySpeed += 0.1;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
          let x = i * 60 + 50;
          let y = j * 40 + 50;
          this.enemigos.push(new Enemy(x, y));
        }
      }
    }

    fill(255);
    textSize(20);
    textAlign(LEFT);
    text("Puntuación: " + this.score, 20, 30);
  }
  sumarBaseY() {
    for (let i = 0; i < this.enemigos.length; i ++) {
      console.log("Hola,", this.enemigos[i].baseY)
        this.enemigos[i].baseY += 20
        if( this.enemigos[i].baseY >= 300){
         ///LOGICA DE PERDER
        }
    }
  }

  keyPressed() {
    if (key === ' ' && this.gameStarted) {
      let bullet = new Bullet(this.player.x + this.player.width / 2, height - 40);
      this.bullets.push(bullet);
    }

    if (keyCode === LEFT_ARROW && this.gameStarted) {
      this.player.setDirection(-1);
    } else if (keyCode === RIGHT_ARROW && this.gameStarted) {
      this.player.setDirection(1);
    }
  }


  keyReleased() {
    if ((keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) && this.gameStarted) {
      this.player.setDirection(0);
    }
  }
 
   PantallaPerder() {
    this.finalState2.mostrar();
    
    fill(0, 0, 150);
    rectMode(CENTER);
    rect(width / 14, height - 160, 100, 60); 
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text("Reiniciar", width / 14, height - 160);

    if (mouseX > width / 14 - 50 && mouseX < width / 14 + 50 && mouseY > height - 200 && mouseY < height - 140 && mouseIsPressed) {
      pantallas.mostrarPantallaInicio();
       pantallas.game = null; // Reinicia la instancia de Game  
 }
    }
  mostrarPantallaVictoria() {
    this.finalState.mostrar();

    fill(0, 0, 150);
    rectMode(CENTER);
    rect(width / 14, height - 160, 100, 60); 
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text("Reiniciar", width / 14, height - 160);

    // Agrega el siguiente bloque de código
    if (mouseX > width / 14 - 50 && mouseX < width / 14 + 50 && mouseY > height - 200 && mouseY < height - 140 && mouseIsPressed) {
      pantallas.mostrarPantallaInicio();
       pantallas.game = null; // Reinicia la instancia de Game  
 }
  }
}
