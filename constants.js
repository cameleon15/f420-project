// Wang tiles
export const tileWidth = 50;

export const white = "#FFFFFF";
export const grey = "#D3D3D3";
export const red = "#FF0000";
export const green = "#00FF00";
export const blue = "#0000FF";
export const yellow = "#FFFF00";
export const cyan = "#00FFFF";
export const magenta = "#FF00FF";
export const orange = "#FFA500";
export const purple = "#800080";
export const pink = "#FFC0CB";
export const brown = "#A52A2A";
export const lightBlue = "#ADD8E6";
export const lightGreen = "#90EE90";
export const darkRed = "#8B0000";
export const darkGreen = "#006400";
export const darkBlue = "#00008B";
export const olive = "#808000";
export const maroon = "#800000";
export const navy = "#000080";
export const teal = "#008080";
export const lime = "#00FF00";
export const aqua = "#00FFFF";
export const silver = "#C0C0C0";
export const gold = "#FFD700";
export const beige = "#F5F5DC";
export const coral = "#FF7F50";
export const salmon = "#FA8072";
export const violet = "#EE82EE";
export const indigo = "#4B0082";
export const khaki = "#F0E68C";
export const lavender = "#E6E6FA";
export const plum = "#DDA0DD";
export const orchid = "#DA70D6";
export const wheat = "#F5DEB3";
export const mint = "#98FF98";
export const peach = "#FFDAB9";
export const turquoise = "#40E0D0";
export const crimson = "#DC143C";
export const mustard = "#FFDB58";
export const amber = "#FFBF00";
export const azure = "#007FFF";
export const chartreuse = "#7FFF00";
export const turquoiseBlue = "#00FFEF";

export const colors = [red, orange, yellow, green, blue];



// Turing machine
import { MachineStep } from "./model/turingMachine.js";

export const maxIter = 20;
export const right = 1;
export const left = -1;
export const alphabet = ["0", "1"];
export const empty = "";

export const states1 = [0, 1, 2, 3];
export const finalState1 = 3;
export const transitionTable1 = {
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

export const states2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const finalState2 = 11;

export const transitionTable2 = {
    0: {
        "#": new MachineStep(1, "#", right)
    },
    1: {
        "0": new MachineStep(2, "0", right),
        "1": new MachineStep(6, "0", right)
    },
    2: {
        "0": new MachineStep(2, "0", right),
        "1": new MachineStep(2, "1", right),
        "#": new MachineStep(3, "#", left)
    },
    3: {
        "0": new MachineStep(5, "#", left),
        "1": new MachineStep(4, "#", left)
    },
    4: {
        "0": new MachineStep(5, "1", left),
        "1": new MachineStep(4, "1", left),
        "#": new MachineStep(1, "#", right)
    },
    5: {
        "0": new MachineStep(5, "0", left),
        "1": new MachineStep(4, "0", left),
        "#": new MachineStep(1, "#", right)
    },
    6: {
        "0": new MachineStep(8, "0", right),
        "1": new MachineStep(9, "1", right),
        "#": new MachineStep(11, "#", right)
    },
    7: {
        "0": new MachineStep(7, "0", right),
        "1": new MachineStep(8, "1", right)
    },
    8: {
        "0": new MachineStep(7, "1", right),
        "1": new MachineStep(9, "0", right),
        "#": new MachineStep(10, "1", left)
    },
    9: {
        "0": new MachineStep(8, "0", right),
        "1": new MachineStep(9, "1", right),
        "#": new MachineStep(8, "0", right)
    },
    10: {
        "0": new MachineStep(10, "0", left),
        "1": new MachineStep(10, "1", left),
        "#": new MachineStep(1, "#", right)
    }
  };

export const valueMap = new Map([
    ["0", red],
    ["1", blue],
    ["#", grey],
    [empty, white],
    ["0#", orange],
    ["10", green],
    ["11", yellow],
    ["20", purple],
    ["21", teal],
    ["2#", darkBlue],
    ["30", lightGreen],
    ["31", pink],
    ["40", cyan],
    ["41", magenta],
    ["4#", darkRed],
    ["50", beige],
    ["51", coral],
    ["5#", salmon],
    ["60", violet],
    ["61", turquoiseBlue],
    ["6#", khaki],
    ["70", lavender],
    ["71", plum],
    ["80", orchid],
    ["81", wheat],
    ["8#", mint],
    ["90", peach],
    ["91", turquoise],
    ["9#", crimson],
    ["100", mustard],
    ["101", amber],
    ["10#", chartreuse],
    [0, indigo],
    [1, olive],
    [2, brown],
    [3, lightBlue],
    [4, darkGreen],
    [5, maroon],
    [6, navy],
    [7, azure],
    [8, lime],
    [9, aqua],
    [10, silver],
    [11, gold]
]);

export const colorMap = new Map([
    [red, "0"],
    [blue, "1"],
    [grey, "#"],
    [white, empty],
    [orange, "0#"],
    [green, "10"],
    [yellow, "11"],
    [purple, "20"],
    [teal, "21"],
    [darkBlue, "2#"],
    [lightGreen, "30"],
    [pink, "31"],
    [cyan, "40"],
    [magenta, "41"],
    [darkRed, "4#"],
    [beige, "50"],
    [coral, "51"],
    [salmon, "5#"],
    [violet, "60"],
    [turquoiseBlue, "61"],
    [khaki, "6#"],
    [lavender, "70"],
    [plum, "71"],
    [orchid, "80"],
    [wheat, "81"],
    [mint, "8#"],
    [peach, "90"],
    [turquoise, "91"],
    [crimson, "9#"],
    [mustard, "100"],
    [amber, "101"],
    [chartreuse, "10#"],
    [indigo, 0],
    [olive, 1],
    [brown, 2],
    [lightBlue, 3],
    [darkGreen, 4],
    [maroon, 5],
    [navy, 6],
    [azure, 7],
    [lime, 8],
    [aqua, 9],
    [silver, 10],
    [gold, 11]
]);