import { colorMap, tileWidth } from "../constants.js";

export class WangTile {
  constructor(north, east, south, west) {
    this.north = north;
    this.east = east;
    this.south = south;
    this.west = west;
  }

  draw(p, x, y, values) {
    p.fill(this.north);
    p.triangle(x, y, x+tileWidth, y, x+tileWidth/2, y+tileWidth/2);

    p.fill(this.east);
    p.triangle(x+tileWidth/2, y+tileWidth/2, x+tileWidth, y, x+tileWidth, y+tileWidth);

    p.fill(this.south);
    p.triangle(x+tileWidth/2, y+tileWidth/2, x+tileWidth, y+tileWidth, x, y+tileWidth);

    p.fill(this.west);
    p.triangle(x, y, x, y+tileWidth, x+tileWidth/2, y+tileWidth/2);
    
    p.fill("black");
    if (values == true) {
      let shift = 2.5;
      p.text(colorMap.get(this.north), x+tileWidth/2-shift, y+15);
      p.text(colorMap.get(this.east), x+tileWidth-10, y+tileWidth/2);
      p.text(colorMap.get(this.south), x+tileWidth/2-shift, y+tileWidth-5);
      p.text(colorMap.get(this.west), x+5, y+tileWidth/2+10);
    }
  }
}
