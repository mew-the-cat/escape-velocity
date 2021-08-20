import React from "react";

interface ActionBarProps {
  onClick: React.MouseEventHandler;
}

export const ActionBar: React.FC<ActionBarProps> = ({ onClick }) => {
  return (
    <span className="actionbar">
      <b>Actions</b>
      <br />
      <input
        className="action"
        type="button"
        value="Search"
        onClick={onClick}
      />
    </span>
  );
};
