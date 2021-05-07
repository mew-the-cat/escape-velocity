import React from "react";
import { TILETYPE_REGISTRY } from "./TILETYPE_REGISTRY";

export class CellTile extends React.Component {
  render() {
    let tileCssClass = "tile";
    let tileLabel =
      "(" + this.props.coords.x + ", " + this.props.coords.y + ")";

    switch (this.props.type.name) {
      case TILETYPE_REGISTRY[0].name:
        tileCssClass += "-forest";
        break;
      case TILETYPE_REGISTRY[1].name:
        tileCssClass += "-starship";
        break;
      case TILETYPE_REGISTRY[2].name:
        tileCssClass += "-impactclearing";
        break;
      default:
        tileCssClass += "";
        break;
    }

    if (this.props.characters.length !== 0) {
      tileCssClass += "-player";
      tileLabel = "X";
    }

    return (
      <button className={tileCssClass} onClick={this.props.onClick}>
        {tileLabel}
      </button>
    );
  }
}
