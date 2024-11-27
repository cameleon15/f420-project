import { alphabet, finalState1, finalState2, states1, states2, tileWidth, transitionTable1, transitionTable2 } from "../constants.js";
import { Reduction } from "../model/reduction.js";

var reductionSketch = function(p) {
  let reduction;
  let button1;
  let button2;
  let inputBar;
  let selectBar;
  let canvas3;
  let canvas3y;

  function startReduction() {
    let select = selectBar.selected();
    if (select == "Binary increment") reduction = new Reduction(states1, alphabet, finalState1, transitionTable1);
    if (select == "Collatz sequence") reduction = new Reduction(states2, alphabet, finalState2, transitionTable2);
    let input = inputBar.value();
    reduction.run(input.split(""));
  }

  function clear() {
    p.background(255);
    reduction = null;
  }
  
  p.setup = function() {
    canvas3 = p.createCanvas(p.windowWidth, 200);
    canvas3.parent("canvas3");
    canvas3y = canvas3.elt.offsetTop;
    
    selectBar = p.createSelect();
    selectBar.parent("canvas3");
    selectBar.attribute("id", "selectBar");
    selectBar.option("Binary increment");
    selectBar.option("Collatz sequence");
    selectBar.selected("Binary increment");
    inputBar = p.createInput("#111");
    inputBar.parent("canvas3");
    inputBar.attribute("id", "inputBar2");
    button1 = p.createButton("Execute");
    button1.parent("canvas3");
    button1.mousePressed(startReduction);
    button2 = p.createButton("Clear");
    button2.parent("canvas3");
    button2.mousePressed(clear);
  };

  p.draw = function() {
    p.background(255);
    canvas3y = canvas3.elt.offsetTop;
    selectBar.position(20, canvas3y+90);
    inputBar.position(155, canvas3y+90);
    button1.position(330, canvas3y+90);
    button2.position(400, canvas3y+90);
    p.fill("black");
    p.textSize(20);
    p.textAlign(p.LEFT);
    p.text("Reduction Simulation", 10, 50);
    p.textSize(15);
    p.text("Enter a word on the alphabet (0, 1, #) (the word must start by '#')", 15, 70);
    
    if (reduction) {
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
        if (tile) {
          tile.draw(p, x, y, true);
          x += tileWidth+10;
        }
      }
      
      let align = 50 + 3*(tileWidth+10) + 20;
      y = 130;
      p.textSize(15);
      p.textAlign(p.LEFT);
      p.text("Action tiles", align, y);
      p.textSize(10);
      y += 20;
      for (const [state, transitions] of Object.entries(reduction.machine.transitionTable)) {
        x = align;
        p.text(state, x-10, y+tileWidth/2);
        for (const symbol of Object.keys(transitions)) {
          let tile = reduction.actionTiles[[state, symbol]];
          tile.draw(p, x, y, true);
          x += tileWidth+10;
        }
        y += tileWidth+10;
      }

      let lowest = y;
      
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
        if (k == 5) {
          x = align;
          y += tileWidth+10;
          k = 0;
        }
      }

      if (lowest > y) y = lowest;

      x = 50;
      p.textSize(15);
      p.textAlign(p.LEFT);
      p.text("Tiling of the Turing machine steps", x, y+5);
      p.textSize(10);
      y = lowest + 20;
      let height = reduction.draw(p, x, y);
      height = Math.max(500, height + 50);
      if (height != p.height) p.resizeCanvas(p.windowWidth, height);  
    }

  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    canvas3y = canvas3.elt.offsetTop;
    selectBar.position(20, canvas3y+90);
    inputBar.position(155, canvas3y+90);
    button1.position(330, canvas3y+90);
    button2.position(400, canvas3y+90);
  };
};

new p5(reductionSketch, "canvas3");