import { maxIter } from "../constants.js";

export class MachineStep {
  constructor(newState, rewrite, direction) {
    this.newState = newState;
    this.rewrite = rewrite;
    this.direction = direction;
  }
}

class MachineState {
  constructor(state, newState, read, head, tape, direction) {
    this.state = state;
    this.newState = newState;
    this.read = read;
    this.head = head;
    this.tape = tape;
    this.direction = direction;
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

export class TuringMachine {
  constructor(states, alphabet, finalState, transitionTable) {
    this.states = states;
    this.alphabet = alphabet;
    if (!this.alphabet.includes("#")) this.alphabet.push("#");
    this.finalState = finalState;
    this.transitionTable = transitionTable;
    this.head = 0;
    this.currentState = 0;
    this.steps = [];
  }

  read() {
    let state = this.currentState;
    let read = this.tape[this.head];
    let step = this.transitionTable[this.currentState][read];
    this.currentState = step.newState;
    this.tape[this.head] = step.rewrite;
    this.head += step.direction;
    if (this.head == this.tape.length) this.tape.push("#");
    if (this.head < 0) {
      this.tape.unshift("#");
      this.head = 0;
    } 
    this.steps.push(new MachineState(state, this.currentState, read, this.head, structuredClone(this.tape), step.direction));
  }

  run(input) {
    this.tape = input;
    this.steps.push(new MachineState(this.currentState, this.currentState, this.tape[this.head], this.head, structuredClone(this.tape), 0));
    let i = 0;
    while (i < maxIter && this.currentState != this.finalState) {
      this.read();
      i++;
    }
  }

  draw(p, x, y) {
    for (let i=0; i<this.steps.length; i++) {
      this.steps[i].draw(p, x, y);
      y += 50;
    }
    return y;
  }
}
