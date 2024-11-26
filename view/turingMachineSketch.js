import { TuringMachine } from "../model/turingMachine.js";
import { states, finalState, transitionTable, alphabet } from "../constants.js";

var turingMachineSketch = function(p) {
    let machine = new TuringMachine(states, alphabet, finalState, transitionTable);
    let button1;
    let button2;
    let inputBar;
    let canvasy;
  
    function startMachine() {
      let input = inputBar.value();
      machine.run(input.split(""));
    }

    function clear() {
      p.background(255);
      machine = new TuringMachine(states, alphabet, finalState, transitionTable);
    }
  
    p.setup = function() {
      let canvas2 = p.createCanvas(p.windowWidth-100, 500);
      canvas2.parent("canvas2");
      canvasy = canvas2.elt.offsetTop;

      inputBar = p.createInput("111");
      inputBar.parent("canvas2");
      inputBar.position(p.windowWidth-400, canvasy+60);
      inputBar.attribute("id", "inputBar1");
      button1 = p.createButton("Execute");
      button1.parent("canvas2");
      button1.position(p.windowWidth-400, canvasy+90);
      button1.mousePressed(startMachine);
      button2 = p.createButton("Clear");
      button2.parent("canvas2");
      button2.position(p.windowWidth-320, canvasy+90);
      button2.mousePressed(clear);
    };
  
    p.draw = function() {
      p.background(255);
      p.fill("black");
      p.textSize(20);
      p.text("Turing Machine Simulation", p.windowWidth/2-100, 20);

      p.textSize(15);
      p.text("Enter a word on alphabet (0, 1, #)", p.windowWidth-400, canvasy+40);
      let y = machine.draw(p, 20, 40);
      let height = Math.max(500, y + 50);
      if (height != p.height) p.resizeCanvas(p.windowWidth-100, height);
    };
  
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth-100, p.windowHeight);
      inputBar.position(p.windowWidth-400, canvasy+60);
      button1.position(p.windowWidth-400, canvasy+90);
      button2.position(p.windowWidth-320, canvasy+90);
    };
  };
  
  new p5(turingMachineSketch, "canvas2");
  