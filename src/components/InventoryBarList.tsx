import React from "react";
import { Player } from "../models/Player";
import { ItemCard } from "./ItemCard";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface InventoryBarListProps {
  characters: Player[];
  onClick: (slot: number) => void;
  onDragEnd: (result: any) => void;
}

export const InventoryBarList: React.FC<InventoryBarListProps> = ({
  characters,
  onClick,
}) => {
  return (
    <Droppable
      droppableId="items-inventory"
      isDropDisabled={characters[0].items.length >= characters[0].itemsMax}
    >
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
          {characters[0].items.map((item, index) => {
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
                    <ItemCard
                      type="submit"
                      value={item.name}
                      rarity={item.rarity}
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
