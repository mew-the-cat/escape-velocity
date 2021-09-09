import React from "react";
import { Construction } from "../models/Construction";
import { ConstructionCardWrapper } from "./ConstructionCardWrapper";

interface ConstructionBarProps {
  constructions: Construction[];
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
            name={construction.blueprint.name}
            defenseTotal={construction.blueprint.defenseBase}
            itemsToConstruct={construction.blueprint.itemsToConstruct}
            amount={construction.amount}
            onClick={() => {}}
          />
        );
      })}
    </span>
  );
};
