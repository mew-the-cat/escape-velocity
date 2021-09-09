import { Item } from "./Item";

export class Constructution {
  id: number;
  name: string;
  defense: number;
  itemsToConstruct?: Item[];
  items: Item[];

  constructor(
    id: number,
    name: string,
    defense: number,
    itemsToConstruct?: Item[]
  ) {
    this.id = id;
    this.name = name;
    this.defense = defense;
    this.itemsToConstruct = itemsToConstruct;
    this.items = [];
  }
}
