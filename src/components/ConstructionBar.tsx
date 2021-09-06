import React from "react";

import { ConstructionCard } from "./ConstructionCard";
import { ConstructionCardWrapper } from "./ConstructionCardWrapper";

export const ConstructionBar: React.FC = () => {
  return (
    <span className="constructionbar">
      <b>Constructions</b>
      <br />
      <ConstructionCardWrapper
        name="Spacecraft Hull"
        amountConstructed={1}
        defenceTotal={80}
        onClick={() => {}}
      />

      <ConstructionCardWrapper
        name="Engineering Bay"
        amountConstructed={1}
        defenceTotal={10}
        onClick={() => {}}
      />

      <ConstructionCardWrapper
        name="Emergency Beacon"
        amountConstructed={0}
        defenceTotal={0}
        onClick={() => {}}
      />
    </span>
  );
};
