import { Item } from "../models/Item";
import { ItemRarity } from "../types/ItemRarity";

export const ITEM_REGISTRY = [
  new Item(0, "Log", ItemRarity.UBIQUITOUS),
  new Item(1, "Plank", ItemRarity.COMMON),
  new Item(2, "Iron Ore", ItemRarity.COMMON),
  new Item(3, "Iron Sheet", ItemRarity.UNCOMMON),
  new Item(4, "Broken Circuit Board", ItemRarity.RARE),
  new Item(5, "Electronic Component", ItemRarity.SCARCE),
  new Item(6, "Transistor Radio", ItemRarity.UNIQUE),
];
