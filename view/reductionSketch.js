import { Reduction } from "../model/reduction.js";

var reductionSketch = function(p) {
  let reduction = new Reduction();
  
  p.setup = function() {
    let canvas3 = p.createCanvas(p.windowWidth, 500);
    canvas3.parent("canvas3");
    p.fill("black");
    p.textSize(20);
    p.text("Reduction", p.windowWidth/2-75, 50);
    /*let button = p.createButton("Execute");
    button.parent("canvas3");
    button.center('horizontal');
    button.mousePressed(startMachine);*/
  };

  p.draw = function() {
    p.textSize(15);
    p.text("Alphabet tiles", 50, 70);
    p.textSize(10);
    let x = 50;
    let y = 80;
    for (let i=0; i<reduction.alphabetTiles.length; i++) {
      let tile = reduction.alphabetTiles[i];
      tile.draw(p, x, y, true);
      x += 70;
    }
    p.textSize(15);
    p.text("Head tiles", 50, 160);
    p.textSize(10);
    x = 50;
    y = 170;
    for (let i=0; i<reduction.headTiles.length; i++) {
      let tile = reduction.headTiles[i];
      tile.draw(p, x, y, true);
      x += 70;
    }
    p.textSize(15);
    let x1 = x;
    p.text("Action tiles", x1, 70);
    p.textSize(10);
    y = 80;
    for (let i=0; i<reduction.actionTiles.length; i++) {
      let tile = reduction.actionTiles[i];
      tile.draw(p, x1, y, true);
      x1 += 70;
    }
    p.textSize(15);
    let x2 = x;
    p.text("Move tiles", x2, 160);
    p.textSize(10);
    y = 170;
    for (let i=0; i<reduction.moveTiles.length; i++) {
      let tile = reduction.moveTiles[i];
      tile.draw(p, x2, y, true);
      x2 += 70;
    }
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.textSize(20);
    p.text("Turing Machine", p.windowWidth/2-75, 50);
    //button.center('horizontal');
  };
};

new p5(reductionSketch, "canvas3");