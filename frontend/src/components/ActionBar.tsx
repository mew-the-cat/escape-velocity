import React from "react";
import { ActionTile } from "./ActionTile";

interface ActionBarProps {
  isInside: boolean;
  onClickSearch: () => void;
  onClickCraft: () => void;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  isInside,
  onClickSearch,
  onClickCraft,
}) => {
  return (
    <div>
      <b>Actions</b>
      <br />
      <ActionTile type="button" value="Search" onClick={onClickSearch} />
      {isInside && (
        <ActionTile type="button" value="Craft" onClick={onClickCraft} />
      )}
    </div>
  );
};
