import { SETTINGS } from "../constants/SETTINGS";

export class Phase {
  turn;
  isNight;
  untilNextTurn;

  constructor() {
    this.turn = 1;
    this.isNight = false;
    this.untilNextTurn = SETTINGS.DURATION_TURN;
  }
}
