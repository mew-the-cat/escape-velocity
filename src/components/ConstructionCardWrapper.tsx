import React from "react";

import { ConstructionCard } from "./ConstructionCard";

interface ConstructionCardWrapperProps {
  name: string;
  amountConstructed: number;
  defenceTotal: number;
  onClick: () => void;
}

export const ConstructionCardWrapper: React.FC<ConstructionCardWrapperProps> =
  ({ name, amountConstructed, defenceTotal, onClick }) => {
    return (
      <ConstructionCard amountConstructed={amountConstructed} onClick={onClick}>
        <table className="constructioncard-table">
          <tbody>
            <tr className="constructioncard-row">
              <td className="constructioncard-cell" colSpan={2}>
                {name}
              </td>
            </tr>
            <tr className="constructioncard-row">
              <td className="constructioncard-cell">{defenceTotal} DEF</td>
              <td className="constructioncard-cell">x{amountConstructed}</td>
            </tr>
          </tbody>
        </table>
      </ConstructionCard>
    );
  };
