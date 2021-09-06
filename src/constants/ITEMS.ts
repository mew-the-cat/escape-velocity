import { Item } from "../models/Item";
import { ItemRarity } from "../types/ItemRarity";

export const ITEMS = [
  new Item(0, "Log", ItemRarity.UBIQUITOUS),
  new Item(1, "Plank", ItemRarity.COMMON),
  new Item(2, "Wooden Beam", ItemRarity.RARE),
  new Item(3, "Iron Ore", ItemRarity.COMMON),
  new Item(4, "Iron Bar", ItemRarity.UNCOMMON),
  new Item(5, "Iron Sheet", ItemRarity.RARE),
  new Item(6, "Broken Circuit Board", ItemRarity.UNCOMMON),
  new Item(7, "Electronic Plate", ItemRarity.SCARCE),
  new Item(8, "Transistor Radio", ItemRarity.UNIQUE),
  new Item(9, "Copper Ore", ItemRarity.COMMON),
  new Item(10, "Copper Wire", ItemRarity.SCARCE),
  new Item(11, "Antenna", ItemRarity.UNIQUE),
];
