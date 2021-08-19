import React from "react";
import { Player } from "../models/Player";
import { ItemTile } from "./ItemTile";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface InventoryBarListProps {
  characters: Player[];
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const InventoryBarList: React.FC<InventoryBarListProps> = ({
  characters,
  onClick,
  onDragEnd,
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="items-inventory">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {characters[0].inventory.slots.map((item, index) => {
              return (
                <Draggable
                  key={index}
                  draggableId={"item-inventory-" + index}
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
                        value={item.name}
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
    </DragDropContext>
  );
};