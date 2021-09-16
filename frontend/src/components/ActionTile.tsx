import styled from "styled-components";

interface ActionTileProps {
  type: string;
  value: string;
  onClick: () => void;
}

export const ActionTile = styled.input<ActionTileProps>`
  width: 150px;
  height: 40px;
  margin: 3px 3px 3px 3px;
  background-color: rgb(102, 217, 255);
  border-radius: 5px;
  border: 2px solid rgb(204, 242, 255);
  color: white;
  font-size: 14px;
`;
