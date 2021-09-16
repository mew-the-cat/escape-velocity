import styled from "styled-components";
import { Colors } from "../styles/Colors";
import { ItemRarity } from "../types/ItemRarity";

interface BlueprintItemProps {
  rarity: ItemRarity;
}

export const BlueprintItem = styled.div<BlueprintItemProps>`
  color: ${(p) => p.rarity === ItemRarity.UNIQUE && Colors.ITEM_UNIQUE}
    ${(p) => p.rarity === ItemRarity.SCARCE && Colors.ITEM_SCARCE}
    ${(p) => p.rarity === ItemRarity.UNCOMMON && Colors.ITEM_UNCOMMON}
    ${(p) => p.rarity === ItemRarity.COMMON && Colors.ITEM_COMMON}
    ${(p) => p.rarity === ItemRarity.UBIQUITOUS && Colors.ITEM_UBIQUITOUS};
  font-weight: bold;
`;
