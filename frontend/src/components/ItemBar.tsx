import React from "react";
import { Tile } from "../models/Tile";
import { Player } from "../models/Player";
import { InventoryBarWrapper } from "./InventoryBarWrapper";
import { TileBarWrapper } from "./TileBarWrapper";
import { DragDropContext } from "react-beautiful-dnd";
import { CraftBarWrapper } from "./CraftBarWrapper";
import { Construction } from "../models/Construction";

interface ItemBarProps {
  characters: Player[];
  tiles: Tile[][];
  construction: Construction;
  onClickInventory: (slot: number) => void;
  onClickCell: (slot: number) => void;
  onDragEnd: (result: any) => void;
  isInside: boolean;
}

export const ItemBar: React.FC<ItemBarProps> = ({
  characters,
  tiles,
  construction,
  onClickInventory,
  onClickCell,
  onDragEnd,
  isInside,
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
              <TileBarWrapper
                characters={characters}
                tiles={tiles}
                onClick={onClickCell}
                onDragEnd={onDragEnd}
              />
            </td>
            {isInside && (
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
