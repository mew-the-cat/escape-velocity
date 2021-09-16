import React from "react";
import { Blueprint } from "../models/Blueprint";
import { Construction } from "../models/Construction";
import { ConstructionCardWrapper } from "./ConstructionCardWrapper";

interface ConstructionBarProps {
  constructions: Construction[];
  onClick: (blueprint: Blueprint) => void;
}

export const ConstructionBar: React.FC<ConstructionBarProps> = ({
  constructions,
  onClick,
}) => {
  return (
    <span className="constructionbar">
      <b>Constructions</b>
      <br />

      {constructions.map((construction, index) => {
        return (
          <ConstructionCardWrapper
            key={index}
            name={construction.blueprint.name}
            defenseTotal={construction.blueprint.defenseBase}
            itemsToConstruct={construction.blueprint.itemsToConstruct}
            amount={construction.amount}
            onClick={() => {
              onClick(construction.blueprint);
            }}
          />
        );
      })}
    </span>
  );
};
