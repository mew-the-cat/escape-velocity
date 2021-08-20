import React from "react";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import { InventoryBarWrapper } from "./InventoryBarWrapper";
import { CellBarWrapper } from "./CellBarWrapper";
import { CraftBar } from "./CraftBar";
import { DragDropContext } from "react-beautiful-dnd";

interface ItemBarProps {
  characters: Player[];
  tiles: Cell[][];
  onClickInventory: (slot: number) => void;
  onClickCell: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const ItemBar: React.FC<ItemBarProps> = ({
  characters,
  tiles,
  onClickInventory,
  onClickCell,
  onDragEnd,
}) => {
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

            <td className="itemlist">
              <CraftBar />
            </td>
          </tr>
        </tbody>
      </table>
    </DragDropContext>
  );
};
