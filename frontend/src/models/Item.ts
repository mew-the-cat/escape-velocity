import { ItemRarity } from "../types/ItemRarity";

export class Item {
  id: number;
  name: string;
  rarity: ItemRarity;

  constructor(id: number, name: string, rarity: ItemRarity) {
    this.id = id;
    this.name = name;
    this.rarity = rarity;
  }
}
