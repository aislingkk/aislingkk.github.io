var rects;
var divSize;

function setup() {
  createCanvas(windowWidth, windowHeight * 3.5);
  pixelDensity(1);
  rects = new Array();
  divSize = 30;
  //smooth();
  createRects();
}

function draw() {
  background(255);
  for (var i = 0; i < rects.length; i++) {
    rects[i].draw();
  }
}

function createRects() {
  var numX = windowWidth / divSize;
  var numY = (windowHeight * 3.5) / divSize;
  for (var j = 0; j < numY; j++) {
    for (var i = 0; i < numX; i++) {
      rects.push(
        new Rect(i * divSize + divSize / 2, j * divSize + divSize / 2)
      );
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 3.5);
  rects = [];
  createRects();
}

class Rect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rotation;
    this.scale;
    this.alpha;
  }
  draw() {
    var noiseScale = 0.003;
    var noi = noise(
      this.x * noiseScale * 0.5 + millis() / 3000.0,
      this.y * noiseScale + millis() / 6000.0
    );
    this.rotation = map(noi, 0, 1, 2 * PI, 8 * PI);
    this.scale = map(noi, 0.4, 1, divSize * 0.1, divSize * 0.5);
    this.alpha = map(noi, 0.2, 1, 255, 200);
    push();
    noFill();
    stroke(140, 160, this.alpha);
    strokeWeight(0.2);
    rectMode(CENTER);
    translate(this.x, this.y);
    rotate(this.rotation);
    rect(0, 0, this.scale, this.scale);
    //line(0, -this.scale, 0, this.scale);
    pop();
  }
}
