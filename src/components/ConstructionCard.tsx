import styled from "styled-components";
import { Colors } from "../styles/Colors";

interface ConstructionCardProps {
  amountConstructed: number;
  defenceTotal: number;
  onClick: () => void;
}

export const ConstructionCard = styled.div<ConstructionCardProps>`
  width: 100%;
  height: 50px;
  margin: 3px 3px 3px 3px;
  margin-right: 0px;
  background-color: ${(p) =>
    p.amountConstructed > 0
      ? Colors.CONSTRUCTIONS_BUILT
      : Colors.CONSTRUCTIONS_NOT_BUILT};
  border: none;
  border-radius: 5px;
  color: ${(p) => (p.amountConstructed > 0 ? "white" : "black")};
  text-align: center;
  font-size: 14px;
`;
