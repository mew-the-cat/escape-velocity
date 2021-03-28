export class Tile {
    constructor(x, y){    
      this.coords = {
        x: x,
        y: y,
      }
      this.characters = [];
      this.items = [];
    }    
  }