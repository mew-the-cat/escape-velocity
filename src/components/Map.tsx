import React from "react";
import { Tile } from "../models/Tile";
import { TileCard } from "./TileCard";

interface MapProps {
  tiles: Tile[][];
  onClick: (col: number, row: number) => void;
}

export const Map: React.FC<MapProps> = ({ tiles, onClick }) => {
  const Cells = [];

  for (let row = 0; row < tiles.length; row++) {
    for (let col = 0; col < tiles[row].length; col++) {
      const handleClickTileBound = onClick.bind(this, col, row);
      Cells.push(
        <TileCard
          key={"Cell" + col + ":" + row}
          tiletype={tiles[col][row].type}
          characters={tiles[col][row].characters}
          onClick={handleClickTileBound}
        >
          {tiles[col][row].characters.length !== 0
            ? "X"
            : "(" + col + "," + row + ")"}
        </TileCard>
      );
    }
    Cells.push(<br key={"LineBreak" + row} />);
  }
  return <span className="map">{Cells}</span>;
};
