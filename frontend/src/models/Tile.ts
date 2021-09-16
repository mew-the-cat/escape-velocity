import { Item } from "./Item";
import { Player } from "./Player";
import { Tiletype } from "./Tiletype";

export class Tile {
  type: Tiletype;
  coords: {
    x: number;
    y: number;
  };
  characters: Player[];
  items: Item[];
  timesSearched: number;
  isDepleted: boolean;

  constructor(type: Tiletype, x: number, y: number) {
    this.type = type;
    this.coords = {
      x: x,
      y: y,
    };
    this.characters = [];
    this.items = [];
    this.timesSearched = 0;
    this.isDepleted = false;
  }
}
