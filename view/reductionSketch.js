import { tileWidth } from "../constants.js";
import { Reduction } from "../model/reduction.js";

var reductionSketch = function(p) {
  let reduction = new Reduction();
  let button1;
  let button2;
  let inputBar;
  let canvasy;

  function startReduction() {
    let input = inputBar.value();
    reduction.run(input.split(""));
  }

  function clear() {
    p.background(255);
    reduction = new Reduction();
  }
  
  p.setup = function() {
    p.textAlign(p.CENTER, p.CENTER);
    let canvas3 = p.createCanvas(p.windowWidth-100, 500);
    canvas3.parent("canvas3");
    canvasy = canvas3.elt.offsetTop;
    
    inputBar = p.createInput("#111");
    inputBar.parent("canvas3");
    inputBar.position(50, canvasy+90);
    inputBar.attribute("id", "inputBar2");
    button1 = p.createButton("Execute");
    button1.parent("canvas3");
    button1.position(230, canvasy+90);
    button1.mousePressed(startReduction);
    button2 = p.createButton("Clear");
    button2.parent("canvas3");
    button2.position(300, canvasy+90);
    button2.mousePressed(clear);
  };

  p.draw = function() {
    p.background(255);
    p.fill("black");
    p.textSize(20);
    p.text("Reduction Simulation", p.windowWidth/2, 50);
    p.textSize(15);
    p.textAlign(p.LEFT);
    p.text("Enter a word on alphabet (0, 1, #) (the word must start by '#')", 45, 70);

    let x = 50;
    let y = 130;
    p.text("Alphabet tiles", x, y);
    p.textSize(10);
    y += 20
    for (let i=0; i < reduction.machine.alphabet.length; i++) {
      let tile = reduction.alphabetTiles[reduction.machine.alphabet[i]];
      tile.draw(p, x, y, true);
      x += tileWidth+10;
    }

    x = 50;
    y += 80;
    p.textSize(15);
    p.textAlign(p.LEFT);
    p.text("Head tiles", x, y);
    p.textSize(10);
    y += 20;
    for (let i=0; i < reduction.machine.alphabet.length; i++) {
      let tile = reduction.headTiles[reduction.machine.alphabet[i]];
      tile.draw(p, x, y, true);
      x += tileWidth+10;
    }
    
    let align = 50 + 3*(tileWidth+10) + 20;
    y = 130;
    p.textSize(15);
    p.textAlign(p.LEFT);
    p.text("Action tiles", align, y);
    p.textSize(10);
    y += 20;
    for (let i=0; i<reduction.machine.states.length-1; i++) {
      x = align;
      p.text(reduction.machine.states[i], x-10, y+tileWidth/2);
      for (let j=0; j<reduction.machine.alphabet.length; j++) {
        let tile = reduction.actionTiles[[reduction.machine.states[i], reduction.machine.alphabet[j]]];
        tile.draw(p, x, y, true);
        x += tileWidth+10;
      }
      y += tileWidth+10;
    }
    
    align = x + 20;
    x = align;
    y = 130;
    p.textSize(15);
    p.textAlign(p.LEFT);
    p.text("Move tiles", align, y);
    p.textSize(10);
    y += 20;
    let k = 0;
    for (const tile of Object.values(reduction.moveTiles)) {
      tile.draw(p, x, y, true);
      x += tileWidth+10;
      k+=1
      if (k == reduction.machine.alphabet.length) {
        x = align;
        y += tileWidth+10;
        k = 0;
      }
    }

    x = 50;
    p.textSize(15);
    p.textAlign(p.LEFT);
    p.text("Binary increment", x, y);
    p.textSize(10);
    y += 20;
    let height = reduction.draw(p, x, y);
    height = Math.max(500, height + 50);
    if (height != p.height) p.resizeCanvas(p.windowWidth-100, height);
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth-100, p.windowHeight);
    inputBar.position(50, canvasy+80);
    button1.position(230, canvasy+80);
    button2.position(300, canvasy+80);
  };
};

new p5(reductionSketch, "canvas3");