import { Inventory } from "./Inventory";

export class Player {
  hp: number;
  ap: number;
  coords: {
    x: number;
    y: number;
  };
  inventory: Inventory;

  constructor(hp: number, ap: number, x: number, y: number) {
    this.hp = hp;
    this.ap = ap;
    this.coords = {
      x: x,
      y: y,
    };
    this.inventory = new Inventory(6);
  }
}
