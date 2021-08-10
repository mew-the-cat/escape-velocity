import { ITEM_REGISTRY } from "../constants/ITEM_REGISTRY";
import { Item } from "./Item";

export class Inventory {
  size: number;
  slots: Item[];

  constructor(inventorySize: number) {
    this.size = inventorySize;
    this.slots = new Array(inventorySize);
    for (var i = 0; i < this.slots.length; i++) {
      this.slots[i] = ITEM_REGISTRY[0];
    }
  }
}
