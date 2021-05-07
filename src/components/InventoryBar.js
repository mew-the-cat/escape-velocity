import React from "react";

export class InventoryBar extends React.Component {
  render() {
    var itemListComponents = new Array(this.props.characters[0].inventory.size);
    for (var i = 0; i < itemListComponents.length; i++) {
      var handleClickItemInventoryBound = this.props.onClick.bind(this, i);
      itemListComponents[i] = (
        <div key={"ItemInventoryDiv" + i}>
          <input
            className="item"
            type="submit"
            key={"ItemInventoryInput" + i}
            value={this.props.characters[0].inventory.slots[i].name}
            onClick={handleClickItemInventoryBound}
          />
        </div>
      );
    }
    return (
      <div>
        <b>Inventory</b>
        <br />
        {itemListComponents}
      </div>
    );
  }
}
