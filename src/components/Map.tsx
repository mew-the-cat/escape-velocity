import React from "react";
import { Cell } from "../models/Cell";
import { CellTile } from "./CellTile";

interface MapProps {
  tiles: Cell[][];
  onClick: (col: number, row: number) => void;
}

export class Map extends React.Component<MapProps> {
  render() {
    const Cells = [];
    for (let row = 0; row < this.props.tiles.length; row++) {
      for (let col = 0; col < this.props.tiles[row].length; col++) {
        const handleClickTileBound = this.props.onClick.bind(this, col, row);
        Cells.push(
          <CellTile
            key={"Cell" + col + ":" + row}
            tiletype={this.props.tiles[col][row].type}
            characters={this.props.tiles[col][row].characters}
            onClick={handleClickTileBound}
          >
            {this.props.tiles[col][row].characters.length !== 0
              ? "X"
              : "(" + col + "," + row + ")"}
          </CellTile>
        );
      }
      Cells.push(<br key={"LineBreak" + row} />);
    }
    return Cells;
  }
}
