import React from "react";
import { ItemTile } from "./ItemTile";

export class CellBar extends React.Component {
  render() {
    var x = this.props.characters[0].coords.x;
    var y = this.props.characters[0].coords.y;
    var itemListComponents = new Array(this.props.tiles[x][y].items);
    for (var i = 0; i < this.props.tiles[x][y].items.length; i++) {
      var handleClickItemTileBound = this.props.onClick.bind(this, i);
      itemListComponents[i] = (
        <ItemTile
          key={"ItemTileDiv" + i}
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
        <div class="item-panel">{itemListComponents}</div>
      </div>
    );
  }
}
