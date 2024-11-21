import { alphabet, empty, finalState, states, transitionTable, valueMap } from "../constants.js";
import { TuringMachine } from "./turingMachine.js";
import { WangTile } from "./wangTile.js";

export class Reduction {
  constructor() {
    this.machine = new TuringMachine(states, alphabet, finalState, transitionTable);
    this.alphabetTiles = [];
    this.headTiles = [];
    this.createTileset();
  }

  createTileset() {
    for (let i=0; i < this.machine.alphabet.length; i++) {
        let letter = this.machine.alphabet[i];
        this.alphabetTiles.push(new WangTile(valueMap.get(letter), valueMap.get(empty), valueMap.get(letter), valueMap.get(empty)));
        this.headTiles.push(new WangTile(valueMap.get(letter), valueMap.get(empty), valueMap.get(this.machine.states[0]+letter), valueMap.get(empty)));
    }
  }
}

