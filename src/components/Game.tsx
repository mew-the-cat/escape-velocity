import React from "react";
import "../styles/App.css";
import { Map } from "./Map";
import { StatusBar } from "./StatusBar";
import { ActionBar } from "./ActionBar";
import { SETTINGS } from "../constants/SETTINGS";
import { ITEM_REGISTRY } from "../constants/ITEM_REGISTRY";
import { AlertBar } from "./AlertBar";
import { ALERT_TEXTS } from "../constants/ALERT_TEXTS";
import { AlertText } from "../models/AlertText";
import { useState } from "react";
import { useEffect } from "react";
import { generateInitialState } from "../utils/GameUtils";
import { generateItem } from "../utils/ItemUtils";
import { ItemBar } from "./ItemBar";

// Custom hook to force rerenders
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // Integer state
  return () => setValue((value) => value + 1); // Update the state to force render
};

export const Game: React.FC = () => {
  const initialState = generateInitialState();

  const [characters, setCharacters] = useState(initialState.characters);
  const [phase, setPhase] = useState(initialState.phase);
  const [tiles, setTiles] = useState(initialState.tiles);
  const [constructions, setConstructions] = useState(
    initialState.constructions
  );

  const forceUpdate = useForceUpdate();

  const gameLoop = () => {
    const updatedCharacters = characters;
    const updatedPhase = phase;

    if (phase.untilNextTurn > 1) {
      updatedPhase.untilNextTurn -= 1;
    } else {
      updatedPhase.turn += 1;
      updatedPhase.untilNextTurn = SETTINGS.DURATION_TURN;
      updatedCharacters[0].ap < 4 && (updatedCharacters[0].ap += 1);
    }

    if (updatedPhase.untilAlertDismissed > 0) {
      updatedPhase.untilAlertDismissed -= 1;
    }

    setCharacters(updatedCharacters);
    setPhase(updatedPhase);
    forceUpdate();
  };

  const handleClickTile = (col: number, row: number) => {
    if (characters[0].ap > 0) {
      if (distCellToCharacter(col, row) === 1) {
        let updatedCharacters = characters;
        updatedCharacters[0].ap -= 1;

        const oldX = characters[0].coords.x;
        const oldY = characters[0].coords.y;

        updatedCharacters[0].coords = {
          x: col,
          y: row,
        };

        let updatedTiles = tiles;
        updatedTiles[oldX][oldY].characters = [];
        updatedTiles[col][row].characters.push(updatedCharacters[0]);

        setCharacters(updatedCharacters);
        setTiles(updatedTiles);
      }
    } else {
      handleDisplayAlert(ALERT_TEXTS.OUT_OF_AP);
    }
    forceUpdate();
  };

  const handleClickSearch = () => {
    if (characters[0].ap > 0) {
      let updatedCharacters = characters;
      updatedCharacters[0].ap -= 1;

      let fillPosition = -1;
      for (let i = 0; i < characters[0].itemsMax; i++) {
        if (characters[0].items[i] === ITEM_REGISTRY[0]) {
          fillPosition = i;
          break;
        }
      }

      const randomIndex = Math.floor(Math.random() * ITEM_REGISTRY.length);
      if (fillPosition !== -1) {
        updatedCharacters[0].items[fillPosition] = generateItem();

        setCharacters(updatedCharacters);
      } else {
        let updatedTiles = tiles;
        const x = characters[0].coords.x;
        const y = characters[0].coords.y;
        updatedTiles[x][y].items.push(ITEM_REGISTRY[randomIndex]);

        setCharacters(updatedCharacters);
        setTiles(updatedTiles);
      }
    } else {
      handleDisplayAlert(ALERT_TEXTS.OUT_OF_AP);
    }
    forceUpdate();
  };

  const handleClickItemInventory = (slot: number) => {
    if (characters[0].items[slot].id !== ITEM_REGISTRY[0].id) {
      const x = characters[0].coords.x;
      const y = characters[0].coords.y;

      let updatedCharacters = characters;
      let updatedTiles = tiles;

      updatedTiles[x][y].items.push(characters[0].items[slot]);
      updatedCharacters[0].items[slot] = ITEM_REGISTRY[0];

      setCharacters(updatedCharacters);
      setTiles(updatedTiles);
    }
    forceUpdate();
  };

  const handleClickItemTile = (slot: number) => {
    let fillPosition = -1;
    for (var i = 0; i < characters[0].itemsMax; i++) {
      if (characters[0].items[i] === ITEM_REGISTRY[0]) {
        fillPosition = i;
        break;
      }
    }
    if (fillPosition !== -1) {
      const x = characters[0].coords.x;
      const y = characters[0].coords.y;

      let updatedCharacters = characters;
      let updatedTiles = tiles;

      updatedCharacters[0].items[fillPosition] = tiles[x][y].items[slot];
      updatedTiles[x][y].items.splice(slot, 1);

      setCharacters(updatedCharacters);
      setTiles(updatedTiles);
    }
    forceUpdate();
  };

  const handleDisplayAlert = (alert: AlertText) => {
    const updatedPhase = phase;
    updatedPhase.alertActive = alert;
    updatedPhase.untilAlertDismissed = SETTINGS.DURATION_ALERT;
    setPhase(updatedPhase);
    forceUpdate();
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const x = characters[0].coords.x;
    const y = characters[0].coords.y;

    const updatedCharacters = characters;
    const updatedTiles = tiles;
    const updatedConstruction = constructions;

    if (result.source.droppableId === result.destination.droppableId) {
      if (result.source.droppableId === "items-inventory") {
        const items = Array.from(characters[0].items);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatedCharacters[0].items = items;
      }

      if (result.source.droppableId === "items-cell") {
        const items = Array.from(tiles[x][y].items);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatedTiles[x][y].items = items;
      }

      if (result.source.droppableId === "items-craft") {
        const items = Array.from(constructions[0].items);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatedConstruction[0].items = items;
      }
    }

    if (result.source.droppableId !== result.destination.droppableId) {
      let itemsSource = Array(0);
      let itemsDestination = Array(0);

      if (
        result.source.droppableId === "items-inventory" &&
        result.destination.droppableId === "items-cell"
      ) {
        itemsSource = Array.from(characters[0].items);
        itemsDestination = Array.from(tiles[x][y].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedCharacters[0].items = itemsSource;
        updatedTiles[x][y].items = itemsDestination;
      } else if (
        result.source.droppableId === "items-cell" &&
        result.destination.droppableId === "items-inventory"
      ) {
        itemsSource = Array.from(tiles[x][y].items);
        itemsDestination = Array.from(characters[0].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedTiles[x][y].items = itemsSource;
        updatedCharacters[0].items = itemsDestination;
      }

      if (
        result.source.droppableId === "items-inventory" &&
        result.destination.droppableId === "items-craft"
      ) {
        itemsSource = Array.from(characters[0].items);
        itemsDestination = Array.from(constructions[0].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedCharacters[0].items = itemsSource;
        updatedConstruction[0].items = itemsDestination;
      } else if (
        result.source.droppableId === "items-craft" &&
        result.destination.droppableId === "items-inventory"
      ) {
        itemsSource = Array.from(constructions[0].items);
        itemsDestination = Array.from(characters[0].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedConstruction[0].items = itemsSource;
        updatedCharacters[0].items = itemsDestination;
      }

      if (
        result.source.droppableId === "items-cell" &&
        result.destination.droppableId === "items-craft"
      ) {
        itemsSource = Array.from(tiles[x][y].items);
        itemsDestination = Array.from(constructions[0].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedTiles[x][y].items = itemsSource;
        updatedConstruction[0].items = itemsDestination;
      } else if (
        result.source.droppableId === "items-construction" &&
        result.destination.droppableId === "itemscraft"
      ) {
        itemsSource = Array.from(constructions[0].items);
        itemsDestination = Array.from(tiles[x][y].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedConstruction[0].items = itemsSource;
        updatedTiles[x][y].items = itemsDestination;
      }
    }

    setCharacters(updatedCharacters);
    setTiles(updatedTiles);
    setConstructions(updatedConstruction);

    forceUpdate();
  };

  const distCellToCharacter = (col: number, row: number) => {
    return Math.max(
      Math.abs(tiles[col][row].coords.x - characters[0].coords.x),
      Math.abs(tiles[col][row].coords.y - characters[0].coords.y)
    );
  };

  useEffect(() => {
    setInterval(gameLoop, 1000);
  }, []);

  return (
    <div className="ui">
      <div className="ui-row1">
        <Map tiles={tiles} onClick={handleClickTile} />
        <ItemBar
          characters={characters}
          tiles={tiles}
          construction={constructions[0]}
          onClickInventory={handleClickItemInventory}
          onClickCell={handleClickItemTile}
          onDragEnd={handleDragEnd}
        />
      </div>

      <div className="ui-row2">
        <StatusBar phase={phase} characters={characters} />
        <ActionBar onClick={handleClickSearch} />
      </div>

      <div className="ui-row3">
        <AlertBar
          alertText={phase.alertActive}
          isVisible={phase.untilAlertDismissed > 0}
        />
      </div>
    </div>
  );
};

export default Game;
