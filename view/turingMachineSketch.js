import { TuringMachine } from "../model/turingMachine.js";
import { states, finalState, transitionTable, alphabet } from "../constants.js";

var turingMachineSketch = function(p) {
    let machine = new TuringMachine(states, alphabet, finalState, transitionTable);
  
    function startMachine() {
      let input = ["1", "1"];
      machine.run(input);
    }
  
    p.setup = function() {
      let canvas2 = p.createCanvas(p.windowWidth, 500);
      canvas2.parent("canvas2");
      p.fill("black");
      p.textSize(20);
      p.text("Turing Machine", p.windowWidth/2-75, 50);
      let button = p.createButton("Execute");
      button.parent("canvas2");
      button.center('horizontal');
      button.mousePressed(startMachine);
    };
  
    p.draw = function() {
      machine.draw(p, 20, 100);
    };
  
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      p.textSize(20);
      p.text("Turing Machine", p.windowWidth/2-75, 50);
      button.center('horizontal');
    };
  };
  
  new p5(turingMachineSketch, "canvas2");
  