import React from "react";
import "../styles/App.css";
import { Map } from "./Map";
import { StatusBar } from "./StatusBar";
import { ActionBar } from "./ActionBar";
import { SETTINGS } from "../constants/SETTINGS";
import { AlertBar } from "./AlertBar";
import { ALERT_TEXTS } from "../constants/ALERT_TEXTS";
import { AlertText } from "../models/AlertText";
import { useState } from "react";
import { useEffect } from "react";
import { generateInitialState } from "../utils/GameUtils";
import { generateItem } from "../utils/ItemUtils";
import { ItemBar } from "./ItemBar";
import { CRAFT_COMBINATIONS } from "../constants/CRAFT_COMBINATIONS";
import { ConstructionBar } from "./ConstructionBar";
import { Blueprint } from "../models/Blueprint";
import { randomizeDepletion } from "../utils/TileUtils";
import { VictoryModal } from "./VictoryModal";

export const Game: React.FC = () => {
  const initialState = generateInitialState();

  const [characters, setCharacters] = useState(initialState.characters);
  const [phase, setPhase] = useState(initialState.phase);
  const [tiles, setTiles] = useState(initialState.tiles);
  const [constructions, setConstructions] = useState(
    initialState.constructions
  );
  const [userPrompt, setUserPrompt] = useState(initialState.userPrompt);

  const [isInside, setIsInside] = useState(false);
  const [isVisibleVictoryModal, setIsVisibleVictoryModal] = useState(false);
  const [isTimeFrozen, setIsTimeFrozen] = useState(false);

  const gameLoop = () => {
    if (isTimeFrozen) {
      return;
    }

    const updatedCharacters = [...characters];
    const updatedPhase = phase;
    const updatedUserPrompt = userPrompt;

    if (updatedPhase.untilNextTurn > 0) {
      updatedPhase.untilNextTurn -= 1;
    } else {
      updatedPhase.turn += 1;
      updatedPhase.untilNextTurn = SETTINGS.DURATION_TURN - 1;
      updatedCharacters[0].ap < SETTINGS.PLAYER_AP_MAX &&
        (updatedCharacters[0].ap += 1);
    }

    if (updatedUserPrompt.untilAlertDismissed > 0) {
      updatedUserPrompt.untilAlertDismissed -= 1;
    }

    setCharacters([...updatedCharacters]);
    setUserPrompt(updatedUserPrompt);
    setPhase(updatedPhase);
  };

  const handleClickTile = (col: number, row: number) => {
    if (characters[0].ap > 0) {
      if (distCellToCharacter(col, row) === 1) {
        const updatedCharacters = [...characters];
        const updatedTiles = [...tiles];

        const oldX = characters[0].coords.x;
        const oldY = characters[0].coords.y;

        updatedCharacters[0].ap -= 1;

        updatedCharacters[0].coords = {
          x: col,
          y: row,
        };

        updatedTiles[oldX][oldY].characters = [];
        updatedTiles[col][row].characters.push(updatedCharacters[0]);

        setCharacters(updatedCharacters);
        setTiles(updatedTiles);
      }
    } else {
      handleDisplayAlert(ALERT_TEXTS.OUT_OF_AP);
    }
  };

  const handleClickSearch = () => {
    const x = characters[0].coords.x;
    const y = characters[0].coords.y;

    if (x === 5 && y === 5) {
      handleDisplayAlert(ALERT_TEXTS.NO_SEARCH_ZONE);
      return;
    }

    if (characters[0].ap <= 0) {
      handleDisplayAlert(ALERT_TEXTS.OUT_OF_AP);
      return;
    }

    const updatedCharacters = [...characters];
    const updatedTiles = [...tiles];

    updatedCharacters[0].ap -= 1;

    if (characters[0].items.length <= characters[0].itemsMax - 1) {
      updatedCharacters[0].items.push(
        generateItem(updatedTiles[x][y].isDepleted)
      );
    } else {
      updatedTiles[x][y].items.push(
        generateItem(updatedTiles[x][y].isDepleted)
      );
    }

    updatedTiles[x][y].timesSearched += 1;
    if (!updatedTiles[x][y].isDepleted) {
      updatedTiles[x][y].isDepleted = randomizeDepletion(
        updatedTiles[x][y].timesSearched
      );
    }

    setCharacters(updatedCharacters);
    setTiles(updatedTiles);
  };

  const handleClickCraft = () => {
    if (constructions[0].items.length < 2) {
      handleDisplayAlert(ALERT_TEXTS.CRAFT_NO_ITEMS);
      return;
    }

    if (characters[0].ap <= 0) {
      handleDisplayAlert(ALERT_TEXTS.OUT_OF_AP);
      return;
    }

    const updatedCharacters = [...characters];
    const updatedConstructions = [...constructions];

    updatedCharacters[0].ap -= 1;
    setCharacters(updatedCharacters);

    let isCraftSuccessful = false;

    CRAFT_COMBINATIONS.forEach((craftCombination) => {
      if (
        craftCombination.itemCombination.length ===
        constructions[0].items.length
      ) {
        let itemCheckSuccessful = true;
        const itemCheckTemporaryPool = [...updatedConstructions[0].items];
        craftCombination.itemCombination.forEach((item) => {
          if (itemCheckTemporaryPool.includes(item)) {
            itemCheckTemporaryPool.splice(
              itemCheckTemporaryPool.indexOf(item),
              1
            );
          } else {
            itemCheckSuccessful = false;
          }
        });

        if (itemCheckSuccessful) {
          updatedConstructions[0].items = [craftCombination.itemResult];
          setConstructions(updatedConstructions);
          isCraftSuccessful = true;
          handleDisplayAlert(ALERT_TEXTS.CRAFT_SUCCESS);
          return;
        }
      }
    });
    if (!isCraftSuccessful) {
      handleDisplayAlert(ALERT_TEXTS.CRAFT_NO_COMBINATION);
    }
  };

  const handleClickConstruct = (blueprint: Blueprint) => {
    if (characters[0].ap <= 0) {
      handleDisplayAlert(ALERT_TEXTS.OUT_OF_AP);
      return;
    }

    const updatedCharacters = [...characters];
    updatedCharacters[0].ap -= 1;

    let areAllItemsPresent = true;
    const itemCheckTemporaryPool = [...tiles[5][5].items];

    blueprint.itemsToConstruct?.map((itemToConstruct) => {
      if (itemCheckTemporaryPool.includes(itemToConstruct)) {
        itemCheckTemporaryPool.splice(
          itemCheckTemporaryPool.indexOf(itemToConstruct),
          1
        );
      } else {
        areAllItemsPresent = false;
        handleDisplayAlert(ALERT_TEXTS.CONSTRUCTION_NO_ITEMS);
      }
    });

    if (areAllItemsPresent) {
      const updatedConstructions = [...constructions];
      const updatedTiles = [...tiles];

      blueprint.itemsToConstruct?.map((itemToConstruct) => {
        if (updatedTiles[5][5].items.includes(itemToConstruct)) {
          updatedTiles[5][5].items.splice(
            updatedTiles[5][5].items.indexOf(itemToConstruct),
            1
          );
        }
      });

      updatedConstructions[blueprint.id].amount += 1;

      setConstructions(updatedConstructions);
      setTiles(updatedTiles);
      handleDisplayAlert(ALERT_TEXTS.CONSTRUCTION_SUCCESS);
    }
    setCharacters(characters);
  };

  const handleClickItemInventory = (slot: number) => {
    const x = characters[0].coords.x;
    const y = characters[0].coords.y;

    const updatedCharacters = [...characters];
    const updatedTiles = [...tiles];

    updatedTiles[x][y].items.push(characters[0].items[slot]);
    updatedCharacters[0].items.splice(slot, 1);

    setCharacters(updatedCharacters);
    setTiles(updatedTiles);
  };

  const handleClickItemTile = (slot: number) => {
    if (characters[0].items.length <= characters[0].itemsMax - 1) {
      const updatedCharacters = [...characters];
      const updatedTiles = [...tiles];

      const x = characters[0].coords.x;
      const y = characters[0].coords.y;

      updatedCharacters[0].items.push(tiles[x][y].items[slot]);
      updatedTiles[x][y].items.splice(slot, 1);

      setCharacters(updatedCharacters);
      setTiles(updatedTiles);
    }
  };

  const handleDisplayAlert = (alert: AlertText) => {
    const updatedUserPrompt = userPrompt;

    updatedUserPrompt.alertActive = alert;
    updatedUserPrompt.untilAlertDismissed = SETTINGS.DURATION_ALERT;

    setUserPrompt(updatedUserPrompt);
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedCharacters = [...characters];
    const updatedTiles = [...tiles];
    const updatedConstruction = constructions;

    const x = characters[0].coords.x;
    const y = characters[0].coords.y;

    if (result.source.droppableId === result.destination.droppableId) {
      if (result.source.droppableId === "items-inventory") {
        const items = Array.from(characters[0].items);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatedCharacters[0].items = items;
      }

      if (result.source.droppableId === "items-tile") {
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
        result.destination.droppableId === "items-tile"
      ) {
        itemsSource = Array.from(characters[0].items);
        itemsDestination = Array.from(tiles[x][y].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedCharacters[0].items = itemsSource;
        updatedTiles[x][y].items = itemsDestination;
      } else if (
        result.source.droppableId === "items-tile" &&
        result.destination.droppableId === "items-inventory"
      ) {
        if (characters[0].items.length <= characters[0].itemsMax - 1) {
          itemsSource = Array.from(tiles[x][y].items);
          itemsDestination = Array.from(characters[0].items);

          const [reorderedItem] = itemsSource.splice(result.source.index, 1);
          itemsDestination.splice(result.destination.index, 0, reorderedItem);

          updatedTiles[x][y].items = itemsSource;
          updatedCharacters[0].items = itemsDestination;
        }
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
        if (characters[0].items.length <= characters[0].itemsMax - 1) {
          itemsSource = Array.from(constructions[0].items);
          itemsDestination = Array.from(characters[0].items);

          const [reorderedItem] = itemsSource.splice(result.source.index, 1);
          itemsDestination.splice(result.destination.index, 0, reorderedItem);

          updatedConstruction[0].items = itemsSource;
          updatedCharacters[0].items = itemsDestination;
        }
      }

      if (
        result.source.droppableId === "items-tile" &&
        result.destination.droppableId === "items-craft"
      ) {
        itemsSource = Array.from(tiles[x][y].items);
        itemsDestination = Array.from(constructions[0].items);

        const [reorderedItem] = itemsSource.splice(result.source.index, 1);
        itemsDestination.splice(result.destination.index, 0, reorderedItem);

        updatedTiles[x][y].items = itemsSource;
        updatedConstruction[0].items = itemsDestination;
      } else if (
        result.source.droppableId === "items-craft" &&
        result.destination.droppableId === "items-tile"
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
  };

  const handleCloseVictoryModal = () => {
    window.location.reload();
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

  useEffect(() => {
    let x = characters[0].coords.x;
    let y = characters[0].coords.y;
    setIsInside(x === 5 && y === 5);
  }, [characters[0].coords.x, characters[0].coords.y]);

  useEffect(() => {
    if (constructions[2].amount > 0) {
      setIsTimeFrozen(true);
      setIsVisibleVictoryModal(true);
      const updatedUserPrompt = userPrompt;
      updatedUserPrompt.untilAlertDismissed = 1200;
      setUserPrompt(updatedUserPrompt);
    }
  }, [constructions]);

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
          isInside={isInside}
        />
        {isInside && (
          <ConstructionBar
            constructions={constructions}
            onClick={handleClickConstruct}
          />
        )}
      </div>

      <div className="ui-row2">
        <StatusBar phase={phase} characters={characters} />
        <ActionBar
          isInside={isInside}
          onClickSearch={handleClickSearch}
          onClickCraft={handleClickCraft}
        />
      </div>

      <div className="ui-row3">
        <AlertBar
          alertText={userPrompt.alertActive}
          isVisible={userPrompt.untilAlertDismissed > 0}
        />
      </div>

      <VictoryModal
        isVisible={isVisibleVictoryModal}
        handleClose={handleCloseVictoryModal}
      />
    </div>
  );
};

export default Game;
