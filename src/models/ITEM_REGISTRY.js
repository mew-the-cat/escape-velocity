import { Item } from "./Item.js";
import { SETTINGS } from "./SETTINGS.js";

export const ITEM_REGISTRY = [
  new Item(0, " ", -1),
  new Item(1, "Log", 0),
  new Item(2, "Plank", 1),
  new Item(3, "Iron Ore", 2),
  new Item(4, "Iron Bar", 1),
  new Item(5, "Iron Sheet", 2),
  new Item(6, "Broken Circuit Board", 1),
  new Item(7, "Electronic Component", 2),
  new Item(8, "Transistor Radio", 999),
];

export const generateItem = () => {
  const randomNumber = 100 * Math.random();
  for (
    let frequency = 0;
    frequency < SETTINGS.ITEM_SEARCH_FREQUENCY_THRESHOLDS.length - 1;
    frequency++
  ) {
    if (
      randomNumber > SETTINGS.ITEM_SEARCH_FREQUENCY_THRESHOLDS[frequency] &&
      randomNumber < SETTINGS.ITEM_SEARCH_FREQUENCY_THRESHOLDS[frequency + 1]
    ) {
      const itemSubset = generateItemSubset(frequency);
      const randomIndex = Math.floor(Math.random() * itemSubset.length);
      const randomItem = itemSubset[randomIndex];
      console.log(randomNumber + "    " + frequency + "    " + randomItem);
      return randomItem;
    }
  }
};

const generateItemSubset = (frequency) => {
  let itemSubset = [];
  for (let i = 0; i < ITEM_REGISTRY.length; i++) {
    if (ITEM_REGISTRY[i].frequency === frequency) {
      itemSubset.push(ITEM_REGISTRY[i]);
    }
  }
  return itemSubset;
};
