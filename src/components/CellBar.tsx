import React from "react";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import { ItemTile } from "./ItemTile";

interface CellBarProps {
  characters: Player[];
  tiles: Cell[][];
  onClick: (slot: number) => void;
}

export class CellBar extends React.Component<CellBarProps> {
  render() {
    var x = this.props.characters[0].coords.x;
    var y = this.props.characters[0].coords.y;
    var itemListComponents = new Array(this.props.tiles[x][y].items.length);
    for (var i = 0; i < this.props.tiles[x][y].items.length; i++) {
      var handleClickItemTileBound = this.props.onClick.bind(this, i);
      itemListComponents[i] = (
        <ItemTile
          className="item"
          type="submit"
          key={"ItemTileInput" + i}
          value={this.props.tiles[x][y].items[i].name}
          onClick={handleClickItemTileBound}
        />
      );
    }
    return (
      <div>
        <b>
          {this.props.tiles[x][y].type.name} ({x}, {y})
        </b>
        <br />
        <div className="item-panel">{itemListComponents}</div>
      </div>
    );
  }
}
