// Wang tiles
export const tileWidth = 50;

export const white = "#FFFFFF";
export const grey = "#D3D3D3";
export const red = "#FF0000";
export const orange = "#FFA500";
export const yellow = "#FFFF00";
export const green = "#008000";
export const blue = "#3498DB";
export const purple = "#8E44AD";
export const teal = "#1ABC9C";
export const darkBlue = "#34495E";
export const colors = [red, orange, yellow, green, blue];

// Turing machine
export const right = 1;
export const left = -1;
export const alphabet = ["0", "1", "#"];
export const states = [0,1,2,3];
export const finalState = 3;
export const empty = "";

import { MachineStep } from "./model/turingMachine.js";
export const transitionTable = {
    0: {
        "0": new MachineStep(0, "0", left),
        "1": new MachineStep(0, "1", left),
        "#": new MachineStep(1, "#", right)
    },
    1: {
        "0": new MachineStep(2, "1", right),
        "1": new MachineStep(1, "0", right),
        "#": new MachineStep(2, "1", right)
    },
    2: {
        "0": new MachineStep(2, "0", right),
        "1": new MachineStep(2, "1", right),
        "#": new MachineStep(3, "#", left)
    }
  };

export const valueMap = new Map([
    ["0", red],
    ["1", blue],
    ["#", grey],
    [empty, white],
    ["00", orange],
    ["01", green],
    ["0#", yellow]
]);

export const colorMap = new Map([
    [red, "0"], 
    [blue, "1"], 
    [grey, "#"], 
    [white, empty], 
    [orange, "00"], 
    [green, "01"], 
    [yellow, "0#"]
]);