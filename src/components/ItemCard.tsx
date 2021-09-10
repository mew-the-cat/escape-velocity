import styled from "styled-components";
import { Colors } from "../styles/Colors";
import { ItemRarity } from "../types/ItemRarity";

interface ItemCardProps {
  type: string;
  value: string;
  rarity: ItemRarity;
  onClick: (index: number) => void;
}

export const ItemCard = styled.input<ItemCardProps>`
  width: 80%;
  height: 40px;
  margin: 3px 3px 3px 3px;
  background-color: ${(p) =>
      p.rarity === ItemRarity.UBIQUITOUS && Colors.ITEM_UBIQUITOUS}
    ${(p) => p.rarity === ItemRarity.COMMON && Colors.ITEM_COMMON}
    ${(p) => p.rarity === ItemRarity.UNCOMMON && Colors.ITEM_UNCOMMON}
    ${(p) => p.rarity === ItemRarity.RARE && Colors.ITEM_RARE}
    ${(p) => p.rarity === ItemRarity.SCARCE && Colors.ITEM_SCARCE}
    ${(p) => p.rarity === ItemRarity.UNIQUE && Colors.ITEM_UNIQUE};
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 14px;
`;
