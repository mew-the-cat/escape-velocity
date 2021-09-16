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
];
