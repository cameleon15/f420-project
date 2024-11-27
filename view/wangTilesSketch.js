import { colors } from "../constants.js";
import { WangTile } from "../model/wangTile.js";

var wangTilesSketch = function(p) {
    var tiles = [];
    let button;
    let canvas1;
    let canvas1y;
  
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
      canvas1 = p.createCanvas(p.windowWidth-100, 150);
      canvas1.parent("canvas1");
      canvas1y = canvas1.elt.offsetTop;
      randomTiles();
      
      button = p.createButton("New set of tiles");
      button.parent("canvas1");
      button.position(130, canvas1y+130);
      button.mousePressed(randomTiles);
    };
  
    p.draw = function() {
      p.background(255);
      p.fill("black");
      p.textSize(20);
      p.text("Set of 5 Wang tiles with random colors", 5, 20);
      let x = 10;
      let y = 50;
      for (let i=0; i < tiles.length; i++) {
        tiles[i].draw(p, x, y);
        x += 70;
      }
    };
  
    p.windowResized = function () {
      p.resizeCanvas(p.windowWidth-100, 150);
      canvas1y = canvas1.elt.offsetTop;
      button.position(130, canvas1y+130);
    };
  };
  
  new p5(wangTilesSketch, "canvas1");