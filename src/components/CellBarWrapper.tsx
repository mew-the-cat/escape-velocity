import React from "react";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import { CellBarList } from "./CellBarList";

interface CellBarWrapperProps {
  characters: Player[];
  tiles: Cell[][];
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const CellBarWrapper: React.FC<CellBarWrapperProps> = ({
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
        {tiles[x][y].type.name} ({x}, {y})
      </b>
      <br />

      <CellBarList
        characters={characters}
        tiles={tiles}
        onClick={onClick}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};
