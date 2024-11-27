import { TuringMachine } from "../model/turingMachine.js";
import { states1, finalState1, transitionTable1, alphabet } from "../constants.js";

var turingMachineSketch = function(p) {
    let machine = new TuringMachine(states1, alphabet, finalState1, transitionTable1);
    let button1;
    let button2;
    let inputBar;
    let canvas2;
    let canvas2y;
  
    function startMachine() {
      let input = inputBar.value();
      machine.run(input.split(""));
    }

    function clear() {
      p.background(255);
      machine = new TuringMachine(states1, alphabet, finalState1, transitionTable1);
    }
  
    p.setup = function() {
      canvas2 = p.createCanvas(p.windowWidth, 500);
      canvas2.parent("canvas2");
      canvas2y = canvas2.elt.offsetTop;

      inputBar = p.createInput("111");
      inputBar.parent("canvas2");
      inputBar.position(50, canvas2y+60);
      inputBar.attribute("id", "inputBar1");
      button1 = p.createButton("Execute");
      button1.parent("canvas2");
      button1.position(50, canvas2y+90);
      button1.mousePressed(startMachine);
      button2 = p.createButton("Clear");
      button2.parent("canvas2");
      button2.position(120, canvas2y+90);
      button2.mousePressed(clear);
    };
  
    p.draw = function() {
      p.background(255);
      canvas2y = canvas2.elt.offsetTop;
      inputBar.position(50, canvas2y+60);
      button1.position(50, canvas2y+90);
      button2.position(120, canvas2y+90);
      p.fill("black");
      p.textSize(20);
      p.textAlign(p.CENTER);
      p.text("Turing Machine Simulation", p.windowWidth/2, 40);
      p.textSize(15);
      p.textAlign(p.LEFT);
      p.text("Enter a word on alphabet (0, 1, #)", 50, 50);
      let y = machine.draw(p, 50, 150);
      let height = Math.max(400, y + 50);
      if (height != p.height) p.resizeCanvas(p.windowWidth, height);
    };
  
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      inputBar.position(50, canvas2y+60);
      button1.position(50, canvas2y+90);
      button2.position(120, canvas2y+90);
      canvas2y = canvas2.elt.offsetTop;
    };
  };
  
  new p5(turingMachineSketch, "canvas2");
  