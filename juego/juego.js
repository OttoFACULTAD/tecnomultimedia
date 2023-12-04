class Game {
  constructor() {
    this.enemigos = [];
    this.bullets = [];
    this.enemySpeed = 1;
    this.isGameOver = false;
    this.gameStarted = false;
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

  draw() {
    background(0);

    if (!this.gameStarted) {
      this.MostrarPantalladeInicio();
      return;
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

  MostrarPantalladeInicio() {
    background(0);
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text("Rat Invader", width / 2, height - height * 0.75);

    textSize(20);
    text("tecnologia multimedial 1 2023", 140, 20);

    textSize(16);
    text("Alumno Lopez Rajoy Juan Pablo", 120, height - 20);
    text("comision 5", width / 1.9, 22);
    text("Docente Albirosa, Tobias", width - 100, height - 20);

    text("Instrucciones:\nMueve el jugador con las flechas izquierda y derecha.\nDispara con la barra espaciadora.\nElimina a todos los enemigos para ganar.", width / 2, height / 2);

    if (mouseIsPressed && mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height - height / 4 && mouseY < height - height / 7) {
      this.gameStarted = true;
    }

    fill(0, 255, 0);
    rect(width / 2 - 50, height - height / 4, 100, 40);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Iniciar", width / 2, height - height / 5);
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
    this.r = 20;
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
    this.speed = 5;
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

let game;

function setup() {
  createCanvas(600, 400);
  game = new Game();
}

function draw() {
  game.draw();
}

function keyPressed() {
  game.keyPressed();
}

function keyReleased() {
  game.keyReleased();
}
