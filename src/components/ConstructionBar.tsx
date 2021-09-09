import React from "react";
import { CONSTRUCTIONS } from "../constants/CONSTRUCTIONS";
import { Constructution } from "../models/Construction";
import { ItemRarity } from "../types/ItemRarity";
import { ConstructionCard } from "./ConstructionCard";
import { ConstructionCardWrapper } from "./ConstructionCardWrapper";
import { ItemTile } from "./ItemTile";

interface ConstructionBarProps {
  constructions: Constructution[];
}

export const ConstructionBar: React.FC<ConstructionBarProps> = ({
  constructions,
}) => {
  return (
    <span className="constructionbar">
      <b>Constructions</b>
      <br />

      {constructions.map((construction, index) => {
        return (
          <ConstructionCardWrapper
            name={construction.name}
            defenseTotal={construction.defense}
            amountConstructed={1}
            onClick={() => {}}
          />
        );
      })}
    </span>
  );
};
