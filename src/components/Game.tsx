import React from "react";
import "../styles/App.css";

import { Phase } from "../models/Phase";
import { Player } from "../models/Player";
import { Cell } from "../models/Cell";

import { Map } from "./Map.js";
import { StatusBar } from "./StatusBar";
import { ActionBar } from "./ActionBar";
import { InventoryBar } from "./InventoryBar.js";
import { CellBar } from "./CellBar.js";
import { CraftBar } from "./CraftBar.js";

import { SETTINGS } from "../constants/SETTINGS";
import { ITEM_REGISTRY, generateItem } from "../constants/ITEM_REGISTRY";
import { TILETYPE_REGISTRY } from "../constants/TILETYPE_REGISTRY";

interface GameProps {}

interface GameState {
  characters: Player[];
  phase: Phase;
  tiles: Cell[][];
}

class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);

    // Set initial tiles
    var initialTiles = new Array(11);
    for (var col = 0; col < initialTiles.length; col++) {
      initialTiles[col] = new Array(11);
      for (var row = 0; row < initialTiles[col].length; row++) {
        initialTiles[col][row] = new Cell(TILETYPE_REGISTRY[0], col, row);
      }
    }

    initialTiles[5][5].characters.push(
      new Player(
        SETTINGS.PLAYER_HP_MAX,
        SETTINGS.PLAYER_AP_MAX,
        SETTINGS.POSITION_START.x,
        SETTINGS.POSITION_START.y
      )
    );
    initialTiles[5][5].type = TILETYPE_REGISTRY[1];
    initialTiles[4][4].type = TILETYPE_REGISTRY[2];
    initialTiles[5][4].type = TILETYPE_REGISTRY[2];
    initialTiles[6][4].type = TILETYPE_REGISTRY[2];
    initialTiles[4][5].type = TILETYPE_REGISTRY[2];
    initialTiles[6][5].type = TILETYPE_REGISTRY[2];
    initialTiles[4][6].type = TILETYPE_REGISTRY[2];
    initialTiles[5][6].type = TILETYPE_REGISTRY[2];
    initialTiles[6][6].type = TILETYPE_REGISTRY[2];

    // Set initial characters
    var initialCharacters = [];
    initialCharacters.push(
      new Player(
        SETTINGS.PLAYER_HP_MAX,
        SETTINGS.PLAYER_AP_MAX,
        SETTINGS.POSITION_START.x,
        SETTINGS.POSITION_START.y
      )
    );

    // Set initial phase
    var initialPhase = new Phase();

    this.state = {
      tiles: initialTiles,
      characters: initialCharacters,
      phase: initialPhase,
    };

    this.handleClickTile = this.handleClickTile.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickItemInventory = this.handleClickItemInventory.bind(this);
    this.handleClickItemTile = this.handleClickItemTile.bind(this);
  }

  componentDidMount() {
    setInterval(this.gameLoop.bind(this), 1000);
  }

  gameLoop() {
    if (this.state.phase.untilNextTurn > 1) {
      let updatedPhase = this.state.phase;
      updatedPhase.untilNextTurn -= 1;

      this.setState({ phase: updatedPhase });
    } else {
      let updatedPhase = this.state.phase;
      updatedPhase.turn += 1;
      updatedPhase.untilNextTurn = SETTINGS.DURATION_TURN;

      let updatedCharacters = this.state.characters;
      updatedCharacters[0].ap < 4 && (updatedCharacters[0].ap += 1);

      this.setState({ characters: updatedCharacters, phase: updatedPhase });
    }
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <Map tiles={this.state.tiles} onClick={this.handleClickTile} />
            </td>
            <td colSpan={3} className="aux-window">
              <StatusBar
                phase={this.state.phase}
                characters={this.state.characters}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="aux-window">
              <ActionBar onClick={this.handleClickSearch} />
            </td>
          </tr>
          <tr>
            <td className="aux-window">
              <InventoryBar
                characters={this.state.characters}
                onClick={this.handleClickItemInventory}
              />
            </td>
            <td className="aux-window">
              <CellBar
                tiles={this.state.tiles}
                characters={this.state.characters}
                onClick={this.handleClickItemTile}
              />
            </td>
            <td className="aux-window">
              <CraftBar />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  handleClickTile(col: number, row: number) {
    if (this.state.characters[0].ap > 0) {
      if (this.distCellToCharacter(col, row) === 1) {
        let updatedCharacters = this.state.characters;
        updatedCharacters[0].ap -= 1;

        const oldX = this.state.characters[0].coords.x;
        const oldY = this.state.characters[0].coords.y;

        updatedCharacters[0].coords = {
          x: col,
          y: row,
        };

        let updatedTiles = this.state.tiles;
        updatedTiles[oldX][oldY].characters = [];
        updatedTiles[col][row].characters.push(updatedCharacters[0]);

        this.setState({ characters: updatedCharacters, tiles: updatedTiles });
      }
    } else {
      alert("You are out of action points");
    }
  }

  handleClickSearch() {
    if (this.state.characters[0].ap > 0) {
      let updatedCharacters = this.state.characters;
      updatedCharacters[0].ap -= 1;

      let fillPosition = -1;
      for (let i = 0; i < this.state.characters[0].inventory.size; i++) {
        if (this.state.characters[0].inventory.slots[i] === ITEM_REGISTRY[0]) {
          fillPosition = i;
          break;
        }
      }

      const randomIndex = Math.floor(Math.random() * ITEM_REGISTRY.length);
      if (fillPosition !== -1) {
        updatedCharacters[0].inventory.slots[fillPosition] = generateItem();

        this.setState({ characters: updatedCharacters });
      } else {
        let updatedTiles = this.state.tiles;
        const x = this.state.characters[0].coords.x;
        const y = this.state.characters[0].coords.y;
        updatedTiles[x][y].items.push(ITEM_REGISTRY[randomIndex]);

        this.setState({ tiles: updatedTiles });
      }
    } else {
      alert("You are out of action points");
    }
  }

  handleClickItemInventory(slot: number) {
    if (
      this.state.characters[0].inventory.slots[slot].id !== ITEM_REGISTRY[0].id
    ) {
      const x = this.state.characters[0].coords.x;
      const y = this.state.characters[0].coords.y;

      let updatedCharacters = this.state.characters;
      let updatedTiles = this.state.tiles;

      updatedTiles[x][y].items.push(
        this.state.characters[0].inventory.slots[slot]
      );
      updatedCharacters[0].inventory.slots[slot] = ITEM_REGISTRY[0];

      this.setState({ characters: updatedCharacters, tiles: updatedTiles });
    }
  }

  handleClickItemTile(slot: number) {
    let fillPosition = -1;
    for (var i = 0; i < this.state.characters[0].inventory.size; i++) {
      if (this.state.characters[0].inventory.slots[i] === ITEM_REGISTRY[0]) {
        fillPosition = i;
        break;
      }
    }
    if (fillPosition !== -1) {
      const x = this.state.characters[0].coords.x;
      const y = this.state.characters[0].coords.y;

      let updatedCharacters = this.state.characters;
      let updatedTiles = this.state.tiles;

      updatedCharacters[0].inventory.slots[fillPosition] =
        this.state.tiles[x][y].items[slot];
      updatedTiles[x][y].items.splice(slot, 1);

      this.setState({ characters: updatedCharacters, tiles: updatedTiles });
    }
  }

  distCellToCharacter(col: number, row: number) {
    return Math.max(
      Math.abs(
        this.state.tiles[col][row].coords.x - this.state.characters[0].coords.x
      ),
      Math.abs(
        this.state.tiles[col][row].coords.y - this.state.characters[0].coords.y
      )
    );
  }
}

export default Game;
