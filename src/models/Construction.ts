import { Blueprint } from "./Blueprint";
import { Item } from "./Item";

export class Construction {
  id: number;
  blueprint: Blueprint;
  amount: number;
  items: Item[];

  constructor(id: number, blueprint: Blueprint, amount: number) {
    this.id = id;
    this.blueprint = blueprint;
    this.amount = amount;
    this.items = [];
  }
}
