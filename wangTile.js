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

  draw(x, y) {
    fill(this.north);
    triangle(x, y, x+width, y, x+width/2, y+width/2);

    fill(this.east);
    triangle(x+width/2, y+width/2, x+width, y, x+width, y+width);

    fill(this.south);
    triangle(x+width/2, y+width/2, x+width, y+width, x, y+width);

    fill(this.west);
    triangle(x, y, x, y+width, x+width/2, y+width/2);
    
    fill("black");
  }
}

var tiles = [];

function setup() {
  const container = document.getElementById("wangContent");
  createCanvas(windowWidth, 200).parent(container);
  
  button = createButton("New set of tiles");
  button.parent(container);
  button.center('horizontal');
  button.mousePressed(randomTiles);
}

function draw() {
  background(255);
  fill("black");
  textSize(20);
  text("Set of 5 Wang tiles with random colors", windowWidth/2-180, 20);
  let x = windowWidth/2-250;
  let y = 75;
  for (i in tiles) {
    x += 70;
    tiles[i].draw(x, y);
  }
}

windowResized = function () {
  resizeCanvas(windowWidth, 200);
  text("Set of 5 Wang tiles with random colors", windowWidth/2-180, 20);
  button.center('horizontal');
};

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
