import { CraftCombination } from "../models/CraftCombination";
import { ITEMS } from "./ITEMS";

export const CRAFT_COMBINATIONS = [
  new CraftCombination([ITEMS[0], ITEMS[0]], ITEMS[1]), // Log -> Plank
  new CraftCombination([ITEMS[1], ITEMS[1]], ITEMS[2]), // Plank -> Wooden Beam
  new CraftCombination([ITEMS[3], ITEMS[3]], ITEMS[4]), // Iron Ore -> Iron Bar
  new CraftCombination([ITEMS[4], ITEMS[4]], ITEMS[5]), // Iron Bar -> Iron Sheet
  new CraftCombination([ITEMS[6], ITEMS[6]], ITEMS[7]), // Broken Circuit -> Electronic Plate
  new CraftCombination([ITEMS[7], ITEMS[7]], ITEMS[8]), // Electronic Plate -> Transistor Radio
  new CraftCombination([ITEMS[9], ITEMS[9]], ITEMS[10]), // Copper Ore -> Copper Wire
  new CraftCombination([ITEMS[10], ITEMS[10]], ITEMS[11]), // Copper Wire -> Antenna
];
