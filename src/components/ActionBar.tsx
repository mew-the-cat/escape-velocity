import React from "react";

interface ActionBarProps {
  onClick: React.MouseEventHandler;
}

export class ActionBar extends React.Component<ActionBarProps> {
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
