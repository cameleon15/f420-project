import { alphabet, empty, finalState, states, transitionTable, valueMap } from "../constants.js";
import { TuringMachine } from "./turingMachine.js";
import { WangTile } from "./wangTile.js";

export class Reduction {
  constructor() {
    this.machine = new TuringMachine(states, alphabet, finalState, transitionTable);
    this.alphabetTiles = [];
    this.headTiles = [];
    this.actionTiles = [];
    this.moveTiles = [];
    this.createTileset();
  }

  createTileset() {
    for (let i=0; i < this.machine.alphabet.length; i++) {
        let letter = this.machine.alphabet[i];
        this.alphabetTiles.push(new WangTile(valueMap.get(letter), valueMap.get(empty), valueMap.get(letter), valueMap.get(empty)));
        this.headTiles.push(new WangTile(valueMap.get(letter), valueMap.get(empty), valueMap.get(this.machine.states[0]+letter), valueMap.get(empty)));
    }

    for (const [state, transitions] of Object.entries(transitionTable)) {
      for (const [read, step] of Object.entries(transitions)) {
        if (step.direction > 0) {
          this.actionTiles.push(new WangTile(valueMap.get(state+read), valueMap.get(step.newState), valueMap.get(step.rewrite), valueMap.get(empty)));
          this.moveTiles.push(new WangTile(valueMap.get(step.rewrite), valueMap.get(empty), valueMap.get(step.newState+step.rewrite), valueMap.get(step.newState)));
        } else {
          this.actionTiles.push(new WangTile(valueMap.get(state+read), valueMap.get(empty), valueMap.get(step.rewrite), valueMap.get(step.newState)));
          this.moveTiles.push(new WangTile(valueMap.get(step.rewrite), valueMap.get(step.newState), valueMap.get(step.newState+step.rewrite), valueMap.get(empty)));
        }
      }
    }
  }
}

