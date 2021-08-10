import { SETTINGS } from "../constants/SETTINGS.js";

export class Phase {
  constructor() {
    this.turn = 1;
    this.isNight = false;
  }
  untilTextTurn = SETTINGS.DURATION_TURN;
}
