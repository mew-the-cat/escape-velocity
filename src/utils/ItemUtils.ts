import { ItemRarity } from "../types/ItemRarity";
import { ITEMS } from "../constants/ITEMS";
import { Item } from "../models/Item";

export const generateItem = (): Item => {
  const randomRarityGroupItems = getRarityGroupItems(randomizeRarityGroup());
  const randomIndex = Math.floor(Math.random() * randomRarityGroupItems.length);
  return randomRarityGroupItems[randomIndex];
};

const getRarityGroupItems = (rarity: ItemRarity): Item[] => {
  let itemSubset = [];

  for (let i = 0; i < ITEMS.length; i++) {
    if (ITEMS[i].rarity === rarity) {
      itemSubset.push(ITEMS[i]);
    }
  }
  return itemSubset;
};

const randomizeRarityGroup = (): ItemRarity => {
  const randomNumber = Math.random() * 100;
  let itemRarity: ItemRarity;
  if (randomNumber <= 35) {
    itemRarity = ItemRarity.UBIQUITOUS;
  } else if (randomNumber > 35 && randomNumber <= 65) {
    itemRarity = ItemRarity.COMMON;
  } else if (randomNumber > 65 && randomNumber <= 85) {
    itemRarity = ItemRarity.UNCOMMON;
  } else if (randomNumber > 85 && randomNumber <= 95) {
    itemRarity = ItemRarity.RARE;
  } else {
    itemRarity = ItemRarity.SCARCE;
  }
  return itemRarity;
};
