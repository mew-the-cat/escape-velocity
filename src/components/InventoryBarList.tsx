import React from "react";
import { Player } from "../models/Player";
import { ItemTile } from "./ItemTile";

interface InventoryBarListProps {
  characters: Player[];
  onClick: (slot: number) => void;
}

export const InventoryBarList: React.FC<InventoryBarListProps> = ({
  characters,
  onClick,
}) => {
  return (
    <ul>
      {characters[0].inventory.slots.map((item, index) => {
        return (
          <li key={"ItemInventoryInput" + index}>
            <ItemTile
              type="submit"
              value={item.name}
              onClick={() => onClick(index)}
            />
          </li>
        );
      })}
    </ul>
  );
};
