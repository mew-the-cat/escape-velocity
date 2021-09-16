import React from "react";
import { Item } from "../models/Item";
import { BlueprintItem } from "./BlueprintItem";
import { ConstructionCard } from "./ConstructionCard";

interface ConstructionCardWrapperProps {
  name: string;
  amount: number;
  defenseTotal: number;
  itemsToConstruct: Item[] | undefined;
  onClick: () => void;
}

export const ConstructionCardWrapper: React.FC<ConstructionCardWrapperProps> =
  ({ name, amount, defenseTotal, itemsToConstruct, onClick }) => {
    return (
      <ConstructionCard amount={amount} onClick={onClick}>
        <table className="constructioncard-table">
          <tbody>
            <tr className="constructioncard-row">
              <td className="constructioncard-cell" colSpan={2}>
                <b>{name}</b>
              </td>
            </tr>
            <tr className="constructioncard-row">
              <td className="constructioncard-cell">
                <i>{defenseTotal} DEF</i>
              </td>
              <td className="constructioncard-cell">
                <i>x{amount}</i>
              </td>
            </tr>
            {itemsToConstruct &&
              itemsToConstruct.map((item, index) => {
                return (
                  <tr key={index}>
                    <td colSpan={2}>
                      <BlueprintItem rarity={item.rarity}>
                        {item.name}
                      </BlueprintItem>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </ConstructionCard>
    );
  };
