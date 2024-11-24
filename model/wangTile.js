import { colorMap, tileWidth } from "../constants.js";

export class WangTile {
  constructor(north, east, south, west) {
    this.north = north;
    this.east = east;
    this.south = south;
    this.west = west;
  }

  draw(p, x, y, values) {
    const halfTile = tileWidth / 2;

    p.fill(this.north);
    p.triangle(x, y, x + tileWidth, y, x + halfTile, y + halfTile);

    p.fill(this.east);
    p.triangle(x + halfTile, y + halfTile, x + tileWidth, y, x + tileWidth, y + tileWidth);

    p.fill(this.south);
    p.triangle(x + halfTile, y + halfTile, x + tileWidth, y + tileWidth, x, y + tileWidth);

    p.fill(this.west);
    p.triangle(x, y, x, y + tileWidth, x + halfTile, y + halfTile);
    
    p.fill("black");

    if (values === true) {
        p.text(colorMap.get(this.north), x + halfTile, y + halfTile / 2);
        p.text(colorMap.get(this.east), x + (3 * halfTile) / 2, y + halfTile);
        p.text(colorMap.get(this.south), x + halfTile, y + (3 * halfTile) / 2);
        p.text(colorMap.get(this.west), x + halfTile / 2, y + halfTile);
    }
}

}
