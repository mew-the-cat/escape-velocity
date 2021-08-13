import styled from "styled-components";
import { Player } from "../models/Player";
import { Tiletype } from "../models/Tiletype";

interface CellTileProps {
  characters: Player[];
  tiletype: Tiletype;
  onClick: React.MouseEventHandler;
}

export const CellTile = styled.button<CellTileProps>`
  width: 50px;
  height: 50px;
  font-size: ${(props) => (props.characters.length === 0 ? "8px" : "8px")};
  background: ${(props) =>
    props.characters.length === 0
      ? props.tiletype.color
      : "repeating-linear-gradient(45deg, white, white 10px, " +
        props.tiletype.color +
        " 10px,  " +
        props.tiletype.color +
        " 20px)"};
  color: ${(props) => (props.characters.length === 0 ? "black" : "white")};
  font-weight: ${(props) =>
    props.characters.length === 0 ? "normal" : "bold"};
  border: 1px solid white;
  border-collapse: collapse;
  border-radius: 5px;
`;
