import React from "react";
import { Tile } from "../models/Tile";
import { Player } from "../models/Player";
import { ItemTile } from "./ItemTile";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface TileBarListProps {
  characters: Player[];
  tiles: Tile[][];
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const TileBarList: React.FC<TileBarListProps> = ({
  characters,
  tiles,
  onClick,
}) => {
  const x = characters[0].coords.x;
  const y = characters[0].coords.y;

  return (
    <Droppable droppableId="items-tile">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {tiles[x][y].items.map((item, index) => {
            return (
              <Draggable
                key={index}
                draggableId={"item-tile-" + index}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ItemTile
                      type="submit"
                      value={tiles[x][y].items[index].name}
                      rarity={tiles[x][y].items[index].rarity}
                      onClick={() => onClick(index)}
                    />
                  </li>
                )}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};
