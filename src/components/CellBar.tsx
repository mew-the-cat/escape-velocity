import React from "react";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import { ItemTile } from "./ItemTile";

interface CellBarProps {
  characters: Player[];
  tiles: Cell[][];
  onClick: (slot: number) => void;
}

export const CellBar: React.FC<CellBarProps> = ({
  characters,
  tiles,
  onClick,
}) => {
  const x = characters[0].coords.x;
  const y = characters[0].coords.y;
  const itemListComponents = new Array(tiles[x][y].items.length);
  for (let i = 0; i < tiles[x][y].items.length; i++) {
    const handleClickItemTileBound = onClick.bind(this, i);
    itemListComponents[i] = (
      <ItemTile
        className="item"
        type="submit"
        key={"ItemTileInput" + i}
        value={tiles[x][y].items[i].name}
        onClick={handleClickItemTileBound}
      />
    );
  }
  return (
    <div>
      <b>
        {tiles[x][y].type.name} ({x}, {y})
      </b>
      <br />
      <div className="item-panel">{itemListComponents}</div>
    </div>
  );
};
