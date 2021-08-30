import { Item } from "./Item";

export class Player {
  id: number;
  hp: number;
  ap: number;
  coords: {
    x: number;
    y: number;
  };
  items: Item[];
  itemsMax: number;

  constructor(
    id: number,
    hp: number,
    ap: number,
    x: number,
    y: number,
    itemsMax: number
  ) {
    this.id = id;
    this.hp = hp;
    this.ap = ap;
    this.coords = {
      x: x,
      y: y,
    };
    this.itemsMax = itemsMax;
    this.items = [] as Item[];
  }
}
