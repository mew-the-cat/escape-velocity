import { SETTINGS } from "../constants/SETTINGS";
import { TILETYPE_REGISTRY } from "../constants/TILETYPE_REGISTRY";
import { Cell } from "../models/Cell";
import { Phase } from "../models/Phase";
import { Player } from "../models/Player";

interface GameState {
  characters: Player[];
  phase: Phase;
  tiles: Cell[][];
}

export const generateInitialState = (): GameState => {
  let initialTiles = new Array(11);
  for (let col = 0; col < initialTiles.length; col++) {
    initialTiles[col] = new Array(11);
    for (let row = 0; row < initialTiles[col].length; row++) {
      initialTiles[col][row] = new Cell(TILETYPE_REGISTRY[0], col, row);
    }
  }

  initialTiles[5][5].type = TILETYPE_REGISTRY[1];
  initialTiles[4][4].type = TILETYPE_REGISTRY[2];
  initialTiles[5][4].type = TILETYPE_REGISTRY[2];
  initialTiles[6][4].type = TILETYPE_REGISTRY[2];
  initialTiles[4][5].type = TILETYPE_REGISTRY[2];
  initialTiles[6][5].type = TILETYPE_REGISTRY[2];
  initialTiles[4][6].type = TILETYPE_REGISTRY[2];
  initialTiles[5][6].type = TILETYPE_REGISTRY[2];
  initialTiles[6][6].type = TILETYPE_REGISTRY[2];

  initialTiles[5][5].characters.push(
    new Player(
      SETTINGS.PLAYER_HP_MAX,
      SETTINGS.PLAYER_AP_MAX,
      SETTINGS.POSITION_START.x,
      SETTINGS.POSITION_START.y
    )
  );

  // Initial characters

  const initialCharacters = [];
  initialCharacters.push(
    new Player(
      SETTINGS.PLAYER_HP_MAX,
      SETTINGS.PLAYER_AP_MAX,
      SETTINGS.POSITION_START.x,
      SETTINGS.POSITION_START.y
    )
  );

  // Initial phase

  const initialPhase = new Phase();

  return {
    characters: initialCharacters,
    phase: initialPhase,
    tiles: initialTiles,
  };
};
