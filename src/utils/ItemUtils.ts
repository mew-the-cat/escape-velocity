import { ItemRarity } from "../types/ItemRarity";
import { ITEM_REGISTRY } from "../constants/ITEM_REGISTRY";
import { Item } from "../models/Item";

export const generateItem = (): Item => {
  const randomRarityGroupItems = getRarityGroupItems(randomizeRarityGroup());
  const randomIndex = Math.floor(Math.random() * randomRarityGroupItems.length);
  return randomRarityGroupItems[randomIndex];
};

const getRarityGroupItems = (rarity: ItemRarity): Item[] => {
  let itemSubset = [];

  for (let i = 0; i < ITEM_REGISTRY.length; i++) {
    if (ITEM_REGISTRY[i].rarity === rarity) {
      itemSubset.push(ITEM_REGISTRY[i]);
    }
  }
  return itemSubset;
};

const randomizeRarityGroup = (): ItemRarity => {
  const randomNumber = Math.random() * 100;
  if (randomNumber <= 35) {
    return ItemRarity.UBIQUITOUS;
  } else if (randomNumber > 35 && randomNumber <= 65) {
    return ItemRarity.COMMON;
  } else if (randomNumber > 65 && randomNumber <= 85) {
    return ItemRarity.UNCOMMON;
  } else if (randomNumber > 85 && randomNumber <= 95) {
    return ItemRarity.RARE;
  } else {
    return ItemRarity.SCARCE;
  }
};
