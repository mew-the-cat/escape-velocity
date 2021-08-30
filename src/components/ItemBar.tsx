import React from "react";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import { InventoryBarWrapper } from "./InventoryBarWrapper";
import { CellBarWrapper } from "./CellBarWrapper";
import { DragDropContext } from "react-beautiful-dnd";
import { CraftBarWrapper } from "./CraftBarWrapper";
import { Constructution } from "../models/Construction";
import { useState } from "react";
import { useEffect } from "react";

interface ItemBarProps {
  characters: Player[];
  tiles: Cell[][];
  construction: Constructution;
  onClickInventory: (slot: number) => void;
  onClickCell: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const ItemBar: React.FC<ItemBarProps> = ({
  characters,
  tiles,
  construction,
  onClickInventory,
  onClickCell,
  onDragEnd,
}) => {
  const [isShowCraft, setIsShowCraft] = useState(false);

  useEffect(() => {
    let x = characters[0].coords.x;
    let y = characters[0].coords.y;
    setIsShowCraft(x === 5 && y === 5);
  }, [characters[0].coords.x, characters[0].coords.y]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <table className="itembar">
        <tbody>
          <tr className="itemlists">
            <td className="itemlist">
              <InventoryBarWrapper
                characters={characters}
                onClick={onClickInventory}
                onDragEnd={onDragEnd}
              />
            </td>

            <td className="itemlist">
              <CellBarWrapper
                characters={characters}
                tiles={tiles}
                onClick={onClickCell}
                onDragEnd={onDragEnd}
              />
            </td>
            {isShowCraft && (
              <td className="itemlist">
                <CraftBarWrapper
                  construction={construction}
                  onClick={onClickCell}
                  onDragEnd={onDragEnd}
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </DragDropContext>
  );
};
