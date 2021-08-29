import { Item } from "./Item";

export class Constructution {
  id: number;
  name: string;
  items: Item[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.items = [];
  }
}
