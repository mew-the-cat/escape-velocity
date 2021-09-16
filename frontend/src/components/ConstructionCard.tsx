import styled from "styled-components";
import { Colors } from "../styles/Colors";

interface ConstructionCardProps {
  amount: number;
  onClick: () => void;
}

export const ConstructionCard = styled.div<ConstructionCardProps>`
  width: 100%;
  margin: 3px 3px 3px 3px;
  margin-right: 0px;
  background-color: ${(p) =>
    p.amount > 0 ? Colors.CONSTRUCTIONS_BUILT : Colors.CONSTRUCTIONS_NOT_BUILT};
  border: 2px solid
    ${(p) =>
      p.amount > 0
        ? Colors.CONSTRUCTIONS_BUILT_BORDER
        : Colors.CONSTRUCTIONS_NOT_BUILT_BORDER};
  border-radius: 5px;
  color: ${(p) => (p.amount > 0 ? "white" : "black")};
  text-align: center;
  font-size: 14px;
`;
