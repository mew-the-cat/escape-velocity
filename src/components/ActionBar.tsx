import React from "react";
import { ActionTile } from "./ActionTile";

interface ActionBarProps {
  onClick: () => void;
}

export const ActionBar: React.FC<ActionBarProps> = ({ onClick }) => {
  return (
    <div>
      <b>Actions</b>
      <br />
      <ActionTile type="button" value="Search" onClick={onClick} />
    </div>
  );
};
