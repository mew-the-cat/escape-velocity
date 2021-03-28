import {Inventory} from './Inventory.js';

export class Player {
    constructor(hp, ap, x, y){
      this.hp = hp;
      this.ap = ap;
      this.coords = {
        x: x,
        y: y,
      }
      this.inventory = new Inventory(6);
    }  
  }