import { ITEM_REGISTRY } from "../constants/ITEM_REGISTRY";
import { SETTINGS } from "../constants/SETTINGS";
import { Item } from "../models/Item";

export const generateItem = (): Item => {
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
      //console.log(randomNumber + "    " + frequency + "    " + randomItem);
      return randomItem;
    }
  }
  return ITEM_REGISTRY[0];
};

const generateItemSubset = (frequency: number): Item[] => {
  let itemSubset = [];
  for (let i = 0; i < ITEM_REGISTRY.length; i++) {
    if (ITEM_REGISTRY[i].frequency === frequency) {
      itemSubset.push(ITEM_REGISTRY[i]);
    }
  }
  return itemSubset;
};
