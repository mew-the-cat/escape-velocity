import { Blueprint } from "../models/Blueprint";
import { ITEMS } from "./ITEMS";

export const BLUEPRINTS = [
  new Blueprint(0, "Starship", 100),
  new Blueprint(1, "Engineering Bay", 20),
  new Blueprint(2, "Emergency Beacon", 0, [
    ITEMS[11],
    ITEMS[8],
    ITEMS[5],
    ITEMS[2],
  ]),
  new Blueprint(3, "Wooden Barricade", 30, [ITEMS[2], ITEMS[2]]),
  new Blueprint(4, "Reinforced Bay Doors", 60, [ITEMS[5], ITEMS[5]]),
];
