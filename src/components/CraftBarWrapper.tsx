import React from "react";
import { Construction } from "../models/Construction";
import { CraftBarList } from "./CraftBarList";

interface CraftBarWrapperProps {
  construction: Construction;
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const CraftBarWrapper: React.FC<CraftBarWrapperProps> = ({
  construction,
  onClick,
  onDragEnd,
}) => {
  return (
    <div>
      <b>Engineering Bay</b>
      <br />

      <CraftBarList
        construction={construction}
        onClick={onClick}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};
