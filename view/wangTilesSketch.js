import { colors } from "../constants.js";
import { WangTile } from "../model/wangTile.js";

var wangTilesSketch = function(p) {
    var tiles = [];
    let button;
  
    function randomTiles() {
      tiles = [];
      for (let i=0; i<5;i++) {
        let n = colors[Math.floor(Math.random() * colors.length)];
        let e = colors[Math.floor(Math.random() * colors.length)];
        let s = colors[Math.floor(Math.random() * colors.length)];
        let w = colors[Math.floor(Math.random() * colors.length)];
        tiles.push(new WangTile(n, e, s, w));
      }
    }

    p.setup = function() {
      let canvas1 = p.createCanvas(p.windowWidth, 200);
      canvas1.parent("canvas1");
      randomTiles();
      
      button = p.createButton("New set of tiles");
      button.parent("canvas1");
      button.center('horizontal');
      button.mousePressed(randomTiles);
    };
  
    p.draw = function() {
      p.background(255);
      p.fill("black");
      p.textSize(20);
      p.text("Set of 5 Wang tiles with random colors", p.windowWidth/2-200, 20);
      let x = p.windowWidth/2-250;
      let y = 75;
      for (let i=0; i < tiles.length; i++) {
        x += 70;
        tiles[i].draw(p, x, y);
      }
    };
  
    p.windowResized = function () {
      p.resizeCanvas(p.windowWidth, 200);
      button.center('horizontal');
    };
  };
  
  new p5(wangTilesSketch, "canvas1");