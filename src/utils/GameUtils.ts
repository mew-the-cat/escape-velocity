import { CONSTRUCTIONS } from "../constants/CONSTRUCTIONS";
import { SETTINGS } from "../constants/SETTINGS";
import { TILETYPES } from "../constants/TILETYPES";
import { Cell } from "../models/Cell";
import { Constructution } from "../models/Construction";
import { Phase } from "../models/Phase";
import { Player } from "../models/Player";
import { UserPromt } from "../models/UserPrompt";

interface GameState {
  characters: Player[];
  phase: Phase;
  tiles: Cell[][];
  constructions: Constructution[];
  userPrompt: UserPromt;
}

export const generateInitialState = (): GameState => {
  let initialTiles = new Array(11);
  for (let col = 0; col < initialTiles.length; col++) {
    initialTiles[col] = new Array(11);
    for (let row = 0; row < initialTiles[col].length; row++) {
      initialTiles[col][row] = new Cell(TILETYPES[0], col, row);
    }
  }

  initialTiles[5][5].type = TILETYPES[1];
  initialTiles[4][4].type = TILETYPES[2];
  initialTiles[5][4].type = TILETYPES[2];
  initialTiles[6][4].type = TILETYPES[2];
  initialTiles[4][5].type = TILETYPES[2];
  initialTiles[6][5].type = TILETYPES[2];
  initialTiles[4][6].type = TILETYPES[2];
  initialTiles[5][6].type = TILETYPES[2];
  initialTiles[6][6].type = TILETYPES[2];

  initialTiles[5][5].characters.push(
    new Player(
      1,
      SETTINGS.PLAYER_HP_MAX,
      SETTINGS.PLAYER_AP_MAX,
      SETTINGS.POSITION_START.x,
      SETTINGS.POSITION_START.y,
      6
    )
  );

  // Initial characters

  const initialCharacters = [];
  initialCharacters.push(
    new Player(
      1,
      SETTINGS.PLAYER_HP_MAX,
      SETTINGS.PLAYER_AP_MAX,
      SETTINGS.POSITION_START.x,
      SETTINGS.POSITION_START.y,
      6
    )
  );

  // Initial phase

  const initialPhase = new Phase();

  // Initial constructions

  const initialConstructions = [];
  const engineeringBay = CONSTRUCTIONS[0];
  const starship = CONSTRUCTIONS[1];

  initialConstructions.push(engineeringBay);
  initialConstructions.push(starship);

  // Initial user prompt

  const initialUserPrompt = new UserPromt();

  return {
    characters: initialCharacters,
    phase: initialPhase,
    tiles: initialTiles,
    constructions: initialConstructions,
    userPrompt: initialUserPrompt,
  };
};
