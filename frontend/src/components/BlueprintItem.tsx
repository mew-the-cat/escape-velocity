import styled from "styled-components";
import { Colors } from "../styles/Colors";
import { ItemRarity } from "../types/ItemRarity";

interface BlueprintItemProps {
  rarity: ItemRarity;
}

export const BlueprintItem = styled.div<BlueprintItemProps>`
  color: ${(p) => {
    switch (p.rarity) {
      case ItemRarity.UNIQUE:
        return Colors.ITEM_UNIQUE + ";";
      case ItemRarity.SCARCE:
        return Colors.ITEM_SCARCE + ";";
      case ItemRarity.RARE:
        return Colors.ITEM_RARE + ";";
      case ItemRarity.UNCOMMON:
        return Colors.ITEM_UNCOMMON + ";";
      case ItemRarity.COMMON:
        return Colors.ITEM_COMMON + ";";
      case ItemRarity.UBIQUITOUS:
        return Colors.ITEM_UBIQUITOUS + ";";
    }
  }}

  font-weight: bold;
`;
