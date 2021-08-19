import React from "react";
import { Player } from "../models/Player";
import { InventoryBarList } from "./InventoryBarList";

interface InventoryBarWrapperProps {
  characters: Player[];
  onClick: (slot: number) => void;
}

export const InventoryBarWrapper: React.FC<InventoryBarWrapperProps> = ({
  characters,
  onClick,
}) => {
  return (
    <div>
      <b>Inventory</b>
      <br />

      <InventoryBarList characters={characters} onClick={onClick} />
    </div>
  );
};
