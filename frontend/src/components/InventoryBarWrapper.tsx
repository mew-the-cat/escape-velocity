import React from "react";
import { Player } from "../models/Player";
import { InventoryBarList } from "./InventoryBarList";

interface InventoryBarWrapperProps {
  characters: Player[];
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const InventoryBarWrapper: React.FC<InventoryBarWrapperProps> = ({
  characters,
  onClick,
  onDragEnd,
}) => {
  return (
    <div>
      <b>
        Inventory ({characters[0].items.length}/{characters[0].itemsMax})
      </b>
      <br />

      <InventoryBarList
        characters={characters}
        onClick={onClick}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};
