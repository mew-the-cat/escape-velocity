import React from "react";
import { TILETYPE_REGISTRY } from "../models/TILETYPE_REGISTRY";
import styled from "styled-components/macro";

export const CellTile = styled.button`
  width: 50px;
  height: 50px;
  font-size: ${(props) => props.characters.length ===0 ? "8px" : "8px"}; 
  background: ${(props) => props.characters.length ===0 ? props.type.color : "repeating-linear-gradient(45deg, white, white 10px, " + props.type.color + " 10px,  " + props.type.color + " 20px)"};
  color: ${(props) => props.characters.length ===0 ? "black" : "white"};
  font-weight: ${(props) => props.characters.length ===0 ? "normal" : "bold"};
  border: ${(props) => props.characters.length ===0 ? "1px black" : "3px white"}
  border-collapse: collapse;  
`;
