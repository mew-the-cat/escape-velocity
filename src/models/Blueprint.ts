import { Item } from "./Item";

export class Blueprint {
  id: number;
  name: string;
  defenseBase: number;
  itemsToConstruct?: Item[];

  constructor(
    id: number,
    name: string,
    defenseBase: number,
    itemsToConstruct?: Item[]
  ) {
    this.id = id;
    this.name = name;
    this.defenseBase = defenseBase;
    this.itemsToConstruct = itemsToConstruct;
  }
}
