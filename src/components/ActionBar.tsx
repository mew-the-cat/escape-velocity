import React from "react";
import { ActionTile } from "./ActionTile";

interface ActionBarProps {
  onClickSearch: () => void;
  onClickCraft: () => void;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  onClickSearch,
  onClickCraft,
}) => {
  return (
    <div>
      <b>Actions</b>
      <br />
      <ActionTile type="button" value="Search" onClick={onClickSearch} />
      <ActionTile type="button" value="Craft" onClick={onClickCraft} />
    </div>
  );
};
