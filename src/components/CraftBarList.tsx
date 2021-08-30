import React from "react";
import { ItemTile } from "./ItemTile";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Constructution } from "../models/Construction";

interface CraftBarListProps {
  construction: Constructution;
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const CraftBarList: React.FC<CraftBarListProps> = ({
  construction,
  onClick,
}) => {
  return (
    <Droppable droppableId="items-craft">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {construction.items.map((item, index) => {
            return (
              <Draggable
                key={index}
                draggableId={"item-craft-" + index}
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
  );
};
