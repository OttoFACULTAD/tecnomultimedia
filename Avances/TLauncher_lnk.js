class Game {
  constructor() {
    this.enemigos = [];
    this.bullets = [];
    this.enemySpeed = 4;
    this.isGameOver = false;
    this.gameStarted = true;
    this.score = 0;
    this.player = new Player();

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
  draw() {
    background(0);

    if (this.score >= 3600) {
      this.mostrarPantallaVictoria();
      return;
    }

    this.player.show();
    this.player.move();


    for (let bullet of this.bullets) {
      bullet.show();
      bullet.move();

      for (let enemy of this.enemigos) {
        if (bullet.hits(enemy)) {
          this.bullets.splice(this.bullets.indexOf(bullet), 1);
          this.enemigos.splice(this.enemigos.indexOf(enemy), 1);
          this.score += 50;
        }
      }
    }

    for (let enemy of this.enemigos) {
      enemy.show();
      enemy.move();

      if (enemy.y > height - 40) {
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

  PantallaPerder() {
    background(0);
    textSize(48);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);

    fill(255);
    rect(width - 50, 25, 5, 20);
    rect(width - 30, 25, 5, 20);
    rect(width - 50, 25, 20, 5);
    rect(width - 35, 40, 5, 5);
    rect(width - 37, 37.5, 2, 10);
    rect(width - 39, 40, 2, 5);
    rect(width - 41, 42, 2, 1);

    if (mouseIsPressed && mouseX > width - 50 && mouseX < width - 30 && mouseY > 25 && mouseY < 45) {
      this.reiniciarJuego();
      this.gameStarted = false;
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

  reiniciarJuego() {
    this.isGameOver = false;
    this.score = 0;
    this.enemigos = [];
    this.enemySpeed = 1;
  }

  mostrarPantallaVictoria() {
    background(0);
    textSize(48);
    fill(255);
    textAlign(CENTER, CENTER);
    text("You win!", width / 2, height / 2);

    fill(255);
    rect(width - 50, 25, 5, 20);
    rect(width - 30, 25, 5, 20);
    rect(width - 50, 25, 20, 5);
    rect(width - 35, 40, 5, 5);
    rect(width - 37, 37.5, 2, 10);
    rect(width - 39, 40, 2, 5);
    rect(width - 41, 42, 2, 1);

    if (mouseIsPressed && mouseX > width - 50 && mouseX < width - 30 && mouseY > 25 && mouseY < 45) {
      this.reiniciarJuego();
      this.gameStarted = false;
    }
  }
}

class Player {
  constructor() {
    this.width = 60;
    this.height = 20;
    this.x = width / 2 - this.width / 2;
    this.y = height - this.height - 20;
    this.xdir = 0;
    this.pixelArt = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 3],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0],
      [0, 0, 0, 0, 3, 0, 0, 3, 0, 3, 0, 0, 0, 0]
    ];

    this.colores = {
      1: [180, 180, 180],
      2: [255, 192, 203],
      3: [205, 171, 153]
    };
  }

  show() {
    for (let i = 0; i < this.pixelArt.length; i++) {
      for (let j = 0; j < this.pixelArt[i].length; j++) {
        const colorIndex = this.pixelArt[i][j];
        if (colorIndex !== 0) {
          fill(this.colores[colorIndex]);
          noStroke();
          let px = this.x + j * 5;
          let py = this.y + i * 5;
          rect(px, py, 5, 5);
        }
      }
    }
  }

  move() {
    this.x += this.xdir * 5;
    this.x = constrain(this.x, 0, width - this.width);
  }

  setDirection(dir) {
    this.xdir = dir;
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.pixelArt = [
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0]
    ];
  }

  show() {
    fill(255, 0, 0);
    noStroke();
    for (let i = 0; i < this.pixelArt.length; i++) {
      for (let j = 0; j < this.pixelArt[i].length; j++) {
        if (this.pixelArt[i][j] === 1) {
          let px = this.x + j * 4 - this.r * 2;
          let py = this.y + i * 4 - this.r;
          rect(px, py, 5, 5);
        }
      }
    }
  }

  move() {
    this.x += game.enemySpeed;

    if (this.x > width - this.r || this.x < this.r) {
      game.enemySpeed *= -1.11;
      for (let enemy of game.enemigos) {
        enemy.y += 20;
      }
    }
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 12;
  }

  show() {
    fill(255);
    noStroke();
    rect(this.x, this.y, 5, 5);
  }

  move() {
    this.y -= this.speed;
  }

  hits(enemy) {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    return d < 20;
  }
}


class Pantallas {
  constructor() {
    this.estados = [];
    this.indiceEstado = 0; 
    this.game = null
}

  mostrar() {
    background(255);
    if (this.indiceEstado === 15) {
      if (!this.game) {
        this.game = new Game(); // Crea una instancia de Game si no existe
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
  if (this.indiceEstado !== 7 && this.indiceEstado !== 9 && this.indiceEstado !== 11 && this.indiceEstado !== 13 && this.indiceEstado !=14 && this.indiceEstado !=15) {
    
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
 if (this.indiceEstado == 8 || this.indiceEstado == 9 || this.indiceEstado == 10 || this.indiceEstado == 11 || this.indiceEstado == 12 || this.indiceEstado == 13){
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
  else if ((this.indiceEstado == 14) && mouseX > width /2 -50 && mouseX < width /2 + 50 && mouseY > height - 110 && mouseY > -50){
  this.indiceEstado = 15;
  }
  if (this.indiceEstado === 15) {
      if (!this.game) {
        this.game = new Game(); // Crea una instancia de Game si no existe
      }
      this.game.keyPressed(); // Captura eventos de teclado (ajústalo según tus necesidades)
      return;
    }
  }
keyPressed() {
    // Agrega la lógica para manejar eventos de teclado en el estado 15
    if (this.indiceEstado === 15) {
      this.game.keyPressed(); // Captura eventos de teclado (ajústalo según tus necesidades)
      return;
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
class BotonVerde {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(0, 51, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 100, 60);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text(this.texto, this.x, this.y);
  }
}
class BotonAzul {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(0, 0, 150);
    rectMode(CENTER);
    rect(this.x, this.y, 100, 60);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    fill(255);
    text(this.texto, this.x, this.y);
  }
}

class BotonAmarillo {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(216, 214, 15);
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

  game = new Game();
  pantallas = new Pantallas();

  pantallas.estados.push(new EstadoJuego("inicio.jpg"));
  pantallas.estados.push(new EstadoImagen("1.png"));
  pantallas.estados.push(new EstadoImagen("2.png"));
  pantallas.estados.push(new EstadoImagen("3.png"));
  pantallas.estados.push(new EstadoImagen("4.jpg"));
  pantallas.estados.push(new EstadoImagen("5.png"));
  pantallas.estados.push(new EstadoImagen("5.png"));
  pantallas.estados.push(new EstadoImagen("6.png"));
  pantallas.estados.push(new EstadoImagen("7.jpg"));
  pantallas.estados.push(new EstadoImagen("8.jpg"));
  pantallas.estados.push(new EstadoImagen("9.jpg"));
  pantallas.estados.push(new EstadoImagen("10.png"));
  pantallas.estados.push(new EstadoImagen("11.jpg"));
  pantallas.estados.push(new EstadoImagen("12.jpg"));
  pantallas.estados.push(new EstadoImagen("13.jpg"));
  pantallas.estados.push(new EstadoImagen("14.jpg"));
}

function draw() {
  pantallas.mostrar();
}

function mousePressed() {
  pantallas.mousePressed();
}
function keyPressed() {
  if (pantallas && pantallas.indiceEstado === 15 && pantallas.game) {
    pantallas.game.keyPressed();
  }
}

function keyReleased() {
  if (pantallas && pantallas.indiceEstado === 15 && pantallas.game) {
    pantallas.game.keyReleased();
  }
}
