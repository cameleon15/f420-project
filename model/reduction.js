import { alphabet, empty, finalState, left, right, states, tileWidth, transitionTable, valueMap } from "../constants.js";
import { TuringMachine } from "./turingMachine.js";
import { WangTile } from "./wangTile.js";

export class Reduction {
  constructor() {
    this.machine = new TuringMachine(states, alphabet, finalState, transitionTable);
    this.alphabetTiles = {};
    this.headTiles = {};
    this.actionTiles = {};
    this.moveTiles = {};
    this.createTileset();

    this.steps = [];
  }

  createTileset() {
    for (let i=0; i < this.machine.alphabet.length; i++) {
        let letter = this.machine.alphabet[i];
        this.alphabetTiles[letter] = new WangTile(valueMap.get(letter), valueMap.get(empty), valueMap.get(letter), valueMap.get(empty));
        this.headTiles[letter] = new WangTile(valueMap.get(letter), valueMap.get(empty), valueMap.get(this.machine.states[0]+letter), valueMap.get(empty));
    }

    for (const [state, transitions] of Object.entries(transitionTable)) {
      for (const [read, step] of Object.entries(transitions)) {
        if (step.direction > 0) {
          this.actionTiles[[state, read]] = new WangTile(valueMap.get(state+read), valueMap.get(step.newState), valueMap.get(step.rewrite), valueMap.get(empty));
          for (let j=0; j< this.machine.alphabet.length; j++) {
            if (!this.moveTiles[[this.machine.alphabet[j], step.newState]]) this.moveTiles[[this.machine.alphabet[j], step.newState]] = new WangTile(valueMap.get(this.machine.alphabet[j]), valueMap.get(empty), valueMap.get(step.newState+this.machine.alphabet[j]), valueMap.get(step.newState));
          }
        } else {
          this.actionTiles[[state, read]] = new WangTile(valueMap.get(state+read), valueMap.get(empty), valueMap.get(step.rewrite), valueMap.get(step.newState));
          for (let j=0; j< this.machine.alphabet.length; j++) {
            if (!this.moveTiles[[this.machine.alphabet[j], step.newState]]) this.moveTiles[[this.machine.alphabet[j], step.newState]] = new WangTile(valueMap.get(this.machine.alphabet[j]), valueMap.get(step.newState), valueMap.get(step.newState+this.machine.alphabet[j]), valueMap.get(empty));}
        }
      }
    }
  }

  run(input) {
    this.machine.run(input);

    for (let i=0; i<this.machine.steps.length; i++) {
      let prevState = this.machine.steps[i].state;
      let newState = this.machine.steps[i].newState;
      let read = this.machine.steps[i].read;
      let head = this.machine.steps[i].head;
      let tape = this.machine.steps[i].tape;
      let direction = this.machine.steps[i].direction;

      let step = [];
      for (let j=0; j<tape.length; j++) {
        if (i == 0) {
          if (j == head) step.push(this.headTiles[read]);
          else step.push(this.alphabetTiles[tape[j]]);
        }
        else {
          if (direction == right) {
            if (j == head - 1) step.push(this.actionTiles[[prevState, read]]);
            else if (j == head) step.push(this.moveTiles[[tape[head], newState]]);
            else step.push(this.alphabetTiles[tape[j]]);
          }
          else if (direction == left) {
            if (j == head + 1) step.push(this.actionTiles[[prevState, read]]);
            else if (j == head) step.push(this.moveTiles[[tape[head], newState]]);
            else step.push(this.alphabetTiles[tape[j]]);
          }
        }
      }
      this.steps.push(step);
    }
  }

  draw(p, x, y) {
    let align = x;
    for (let i=0; i<this.steps.length; i++) {
      for (let j=0; j<this.steps[i].length; j++) {
        this.steps[i][j].draw(p, x, y, true);
        x += tileWidth;
      }
      y += tileWidth;
      x = align;
    }
    return y;
  }
}

