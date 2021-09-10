import React from "react";
import { Tile } from "../models/Tile";
import { Player } from "../models/Player";
import { TileBarList } from "./TileBarList";

interface TileBarWrapperProps {
  characters: Player[];
  tiles: Tile[][];
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const TileBarWrapper: React.FC<TileBarWrapperProps> = ({
  characters,
  tiles,
  onClick,
  onDragEnd,
}) => {
  const x = characters[0].coords.x;
  const y = characters[0].coords.y;

  return (
    <div>
      <b>
        {tiles[x][y].type.name} ({x}, {y}){" "}
        {tiles[x][y].isDepleted && "[DEPLETED]"}
      </b>
      <br />

      <TileBarList
        characters={characters}
        tiles={tiles}
        onClick={onClick}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};
