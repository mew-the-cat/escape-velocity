import React from "react";

export class ActionBar extends React.Component {
  render() {
    return (
      <div>
        <b>Actions</b>
        <br />
        <input
          className="action"
          type="button"
          value="Search"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
