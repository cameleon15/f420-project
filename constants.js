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
export const lightGreen = "#9FFF33";
export const pink = "#FF33F0";
export const grana = "#C2093E";
export const indigo = "#7609C2";
export const olive = "#7DAB6A";
export const brown = "#8F804D";
export const paleBlue = "#89A2DA";
export const palePink = "#EB95D7";
export const beige = "#FECBAF";
export const pistachio = "#D6F393";
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
    ["0#", yellow],
    ["10", purple],
    ["11", teal],
    ["1#", darkBlue],
    ["20", lightGreen],
    ["21", pink],
    ["2#", grana],
    ["30", palePink],
    ["31", beige],
    ["3#", pistachio],
    [0, indigo],
    [1, olive],
    [2, brown],
    [3, paleBlue]
]);

export const colorMap = new Map([
    [red, "0"], 
    [blue, "1"], 
    [grey, "#"], 
    [white, empty], 
    [orange, "00"], 
    [green, "01"], 
    [yellow, "0#"],
    [purple, "10"],
    [teal, "11"],
    [darkBlue, "1#"],
    [lightGreen, "20"],
    [pink, "21"],
    [grana, "2#"],
    [palePink, "30"],
    [beige, "31"],
    [pistachio, "3#"],
    [indigo, 0],
    [olive, 1],
    [brown, 2],
    [paleBlue, 3]
]);