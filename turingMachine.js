const right = 1;
const left = -1;
const alphabet = [0, 1, "#"];
const states = [0,1,2,3];
const finalState = 3;

class MachineStep {
  constructor(newState, rewrite, direction) {
    this.newState = newState;
    this.rewrite = rewrite;
    this.direction = direction;
  }
}

class MachineState {
  constructor(state, head, tape) {
    this.state = state;
    this.head = head;
    this.tape = tape;
  }

  draw(p, x, y) {
    for (let i=0; i<this.tape.length; i++) {
      p.noFill();
      p.rect(x, y, 30, 15);
      if (i == this.head) p.arc(x+15, y, 30, 35, p.PI, 0);
      p.fill("black");
      p.textSize(15);
      p.text(this.tape[i], x+10, y+12.5);
      if (i == this.head) p.text(this.state, x+10, y-2.5);
      x += 30;
    }
  }
}

class TuringMachine {
  constructor(states, finalState, transitionTable) {
    this.states = states;
    this.finalState = finalState;
    this.transitionTable = transitionTable;
    this.head = 0;
    this.currentState = 0;
    this.steps = [];
  }
  read() {
    let step = this.transitionTable[this.currentState][this.tape[this.head]];
    this.currentState = step.newState;
    this.tape[this.head] = step.rewrite;
    this.head += step.direction;
    if (this.head == this.tape.length) this.tape.push("#");
  }

  run(input) {
    this.tape = input;
    this.steps.push(new MachineState(this.currentState, this.head, structuredClone(this.tape)));
    while (this.currentState != this.finalState) {
      this.read();
      this.steps.push(new MachineState(this.currentState, this.head, structuredClone(this.tape)));
    }
  }

  draw(p, x, y) {
    for (let i=0; i<this.steps.length; i++) {
      this.steps[i].draw(p, x, y);
      y += 75;
    }
  }
}

const transitionTable = {
  0: {
      0: new MachineStep(0, 0, left),
      1: new MachineStep(0, 1, left),
      "#": new MachineStep(1, "#", right)
  },
  1: {
      0: new MachineStep(2, 1, right),
      1: new MachineStep(1, 0, right),
      "#": new MachineStep(2, 1, right)
  },
  2: {
      0: new MachineStep(2, 0, right),
      1: new MachineStep(2, 1, right),
      "#": new MachineStep(3, "#", left)
  }
}

let machine = new TuringMachine(states, finalState, transitionTable);

function startMachine() {
  let input = ["#", 1, 1, "#", "#", "#", "#", "#", "#", "#", "#", "#"];
  machine.run(input);
}

var turingMachineSketch = function(p) {
  p.setup = function() {
    let canvas2 = p.createCanvas(p.windowWidth, 500);
    canvas2.parent("canvas2");
    p.fill("black");
    p.textSize(20);
    p.text("Turing Machine", p.windowWidth/2-75, 50);
    button = p.createButton("Execute");
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
