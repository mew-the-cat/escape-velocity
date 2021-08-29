import { ITEM_REGISTRY } from "../constants/ITEM_REGISTRY";
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

    const emptyItems = new Array(6);
    for (let i = 0; i < itemsMax; i++) {
      emptyItems[i] = ITEM_REGISTRY[0];
    }

    this.items = emptyItems;
  }
}
