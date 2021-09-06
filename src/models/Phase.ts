import { SETTINGS } from "../constants/SETTINGS";

export class Phase {
  turn: number;
  untilNextTurn: number;
  isNight: boolean;

  constructor() {
    this.turn = 1;
    this.untilNextTurn = SETTINGS.DURATION_TURN - 1;
    this.isNight = false;
  }
}
