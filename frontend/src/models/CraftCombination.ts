import { Item } from "./Item";

export class CraftCombination {
  itemCombination: Item[] = [];
  itemResult: Item;

  constructor(itemCombination: Item[], itemResult: Item) {
    this.itemCombination = itemCombination;
    this.itemResult = itemResult;
  }
}
