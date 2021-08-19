import React from "react";

interface ActionBarProps {
  onClick: React.MouseEventHandler;
}

export const ActionBar: React.FC<ActionBarProps> = ({ onClick }) => {
  return (
    <div>
      <b>Actions</b>
      <br />
      <input
        className="action"
        type="button"
        value="Search"
        onClick={onClick}
      />
    </div>
  );
};
