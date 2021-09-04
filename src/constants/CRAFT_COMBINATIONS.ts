import { CraftCombination } from "../models/CraftCombination";
import { ITEM_REGISTRY } from "./ITEM_REGISTRY";

export const CRAFT_COMBINATIONS = [
  new CraftCombination([ITEM_REGISTRY[0], ITEM_REGISTRY[0]], ITEM_REGISTRY[1]),
  new CraftCombination([ITEM_REGISTRY[2], ITEM_REGISTRY[2]], ITEM_REGISTRY[3]),
];
