import React from "react";

import { ConstructionCard } from "./ConstructionCard";

export const ConstructionBar: React.FC = () => {
  return (
    <span className="constructionbar">
      <b>Constructions</b>
      <br />
      <ConstructionCard
        amountConstructed={1}
        defenceTotal={80}
        onClick={() => {}}
      >
        <table className="constructioncard-table">
          <tr className="constructioncard-row">
            <td className="constructioncard-cell" colSpan={2}>
              Starship Hull
            </td>
          </tr>
          <tr className="constructioncard-row">
            <td className="constructioncard-cell">80 DEF</td>
            <td className="constructioncard-cell">x1</td>
          </tr>
        </table>
      </ConstructionCard>
      <ConstructionCard
        amountConstructed={1}
        defenceTotal={10}
        onClick={() => {}}
      >
        <table className="constructioncard-table">
          <tr className="constructioncard-row">
            <td className="constructioncard-cell" colSpan={2}>
              Engineering Bay
            </td>
          </tr>
          <tr className="constructioncard-row">
            <td className="constructioncard-cell">15 DEF</td>
            <td className="constructioncard-cell">x1</td>
          </tr>
        </table>
      </ConstructionCard>
      <ConstructionCard
        amountConstructed={0}
        defenceTotal={0}
        onClick={() => {}}
      >
        <table className="constructioncard-table">
          <tr className="constructioncard-row">
            <td className="constructioncard-cell" colSpan={2}>
              Emergency Beacon
            </td>
          </tr>
          <tr className="constructioncard-row">
            <td className="constructioncard-cell">BUILD</td>
            <td className="constructioncard-cell">x0</td>
          </tr>
        </table>
      </ConstructionCard>
    </span>
  );
};
