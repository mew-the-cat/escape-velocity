import { ITEM_REGISTRY } from "./ITEM_REGISTRY.js";

export class Inventory {
  constructor(inventorySize) {
    this.size = inventorySize;
    this.slots = new Array(inventorySize);
    for (var i = 0; i < this.slots.length; i++) {
      this.slots[i] = ITEM_REGISTRY[0];
    }
  }
}
