import React from "react";
import { Cell } from "../models/Cell";
import { CellTile } from "./CellTile";

interface MapProps {
  tiles: Cell[][];
  onClick: (col: number, row: number) => void;
}

export const Map: React.FC<MapProps> = ({ tiles, onClick }) => {
  const Cells = [];

  for (let row = 0; row < tiles.length; row++) {
    for (let col = 0; col < tiles[row].length; col++) {
      const handleClickTileBound = onClick.bind(this, col, row);
      Cells.push(
        <CellTile
          key={"Cell" + col + ":" + row}
          tiletype={tiles[col][row].type}
          characters={tiles[col][row].characters}
          onClick={handleClickTileBound}
        >
          {tiles[col][row].characters.length !== 0
            ? "X"
            : "(" + col + "," + row + ")"}
        </CellTile>
      );
    }
    Cells.push(<br key={"LineBreak" + row} />);
  }
  return <>{Cells}</>;
};
