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
