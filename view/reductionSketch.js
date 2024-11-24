import { alphabet, states, tileWidth, transitions, transitionTable } from "../constants.js";
import { Reduction } from "../model/reduction.js";

var reductionSketch = function(p) {
  let reduction = new Reduction();
  
  p.setup = function() {
    p.textAlign(p.CENTER, p.CENTER);
    let canvas3 = p.createCanvas(p.windowWidth, 500);
    canvas3.parent("canvas3");
    p.fill("black");
    p.textSize(20);
    p.text("Reduction", p.windowWidth/2, 50);
  };

  p.draw = function() {
    p.textSize(15);
    p.text("Alphabet tiles", 95, 70);
    p.textSize(10);
    let x = 50;
    let y = 90;
    for (let i=0; i<alphabet.length; i++) {
      let tile = reduction.alphabetTiles[alphabet[i]];
      tile.draw(p, x, y, true);
      x+=70;
    }

    x+=20;
    p.textSize(15);
    p.text("Head tiles", x+35, 70);
    p.textSize(10);
    for (let i=0; i<alphabet.length; i++) {
      let tile = reduction.headTiles[alphabet[i]];
      tile.draw(p, x, y, true);
      x+=70;
    }
    
    p.textSize(15);
    p.text("Action tiles", 85, 160);
    p.textSize(10);
    y = 180;
    for (let i=0; i<states.length-1; i++) {
      x = 50;
      p.text(states[i], x-10, y+tileWidth/2);
      for (let j=0; j<alphabet.length; j++) {
        let tile = reduction.actionTiles[[states[i], alphabet[j]]];
        tile.draw(p, x, y, true);
        x+=70;
      }
      y+=tileWidth+10;
    }
    
    x+=20;
    let align = x;
    p.textSize(15);
    p.text("Move tiles", x+35, 160);
    p.textSize(10);
    y = 180;
    for (let i=0; i<states.length-1; i++) {
      for (let j=0; j<alphabet.length; j++) {
        let tile = reduction.moveTiles[[states[i], alphabet[j], transitionTable[i][alphabet[j]].newState]];
        if (tile) {
          tile.draw(p, x, y, true);
          x+=70;
        }
      }
      x = align;
      y+=tileWidth+10;
    }
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.textSize(20);
    p.text("Turing Machine", p.windowWidth/2-75, 50);
  };
};

new p5(reductionSketch, "canvas3");