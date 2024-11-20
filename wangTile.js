const width = 50;

const grey = "#D3D3D3";
const red = "#FF0000";
const orange = "#FFA500";
const yellow = "#FFFF00";
const green = "#008000";
const blue = "#0000FF";
const colors = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF"]

class WangTile {
  constructor(north, east, south, west) {
    this.north = north;
    this.east = east;
    this.south = south;
    this.west = west;
  }

  draw(p, x, y) {
    p.fill(this.north);
    p.triangle(x, y, x+width, y, x+width/2, y+width/2);

    p.fill(this.east);
    p.triangle(x+width/2, y+width/2, x+width, y, x+width, y+width);

    p.fill(this.south);
    p.triangle(x+width/2, y+width/2, x+width, y+width, x, y+width);

    p.fill(this.west);
    p.triangle(x, y, x, y+width, x+width/2, y+width/2);
    
    p.fill("black");
  }
}

var tiles = [];

function randomTiles() {
  tiles = [];
  for (let i=0; i<5;i++) {
    let n = colors[Math.floor(Math.random() * colors.length)];
    let e = colors[Math.floor(Math.random() * colors.length)];
    let s = colors[Math.floor(Math.random() * colors.length)];
    let w = colors[Math.floor(Math.random() * colors.length)];
    tiles.push(new WangTile(n, e, s, w));
  }
}

var wangTilesSketch = function(p) {
  p.setup = function() {
    let canvas1 = p.createCanvas(p.windowWidth, 200);
    canvas1.parent("canvas1");
    randomTiles();
    
    button = p.createButton("New set of tiles");
    button.parent("canvas1");
    button.center('horizontal');
    button.mousePressed(randomTiles);
  };

  p.draw = function() {
    p.background(255);
    p.fill("black");
    p.textSize(20);
    p.text("Set of 5 Wang tiles with random colors", p.windowWidth/2-180, 20);
    let x = p.windowWidth/2-250;
    let y = 75;
    for (i in tiles) {
      x += 70;
      tiles[i].draw(p, x, y);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, 200);
    p.text("Set of 5 Wang tiles with random colors", p.windowWidth/2-180, 20);
    button.center('horizontal');
  };
};

new p5(wangTilesSketch, "canvas1")
