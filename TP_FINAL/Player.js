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
