let canvas;
var drops = [];

function setup() {
      canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
      canvas.style('display', 'block');
      canvas.style('position', 'fixed');
      for (var i = 0; i < 10; i++) {
        drops[i] = new Drop();
      }
      background(7, 7, 29);
    }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(7, 7, 29);
    for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }
  }