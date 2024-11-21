// Wang tiles
export const tileWidth = 50;

export const grey = "#D3D3D3";
export const red = "#FF0000";
export const orange = "#FFA500";
export const yellow = "#FFFF00";
export const green = "#008000";
export const blue = "#0000FF";
export const colors = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF"]

// Turing machine
export const right = 1;
export const left = -1;
export const alphabet = [0, 1, "#"];
export const states = [0,1,2,3];
export const finalState = 3;

import { MachineStep } from "./model/turingMachine.js";
export const transitionTable = {
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