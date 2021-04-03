export class Tile {
    constructor(type, x, y){   
      this.type = type; 
      this.coords = {       
        x: x,
        y: y,
      }
      this.characters = [];
      this.items = [];
    }    
  }