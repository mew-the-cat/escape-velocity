import { SETTINGS } from "../constants/SETTINGS";
export class Phase {
  turn: number;
  isNight: boolean;
  untilNextTurn: number;
  untilDaytimeChange: number;

  constructor() {
    this.turn = 1;
    this.isNight = false;
    this.untilNextTurn = SETTINGS.DURATION_TURN - 1;
    this.untilDaytimeChange = SETTINGS.DURATION_DAYNIGHT_CYCLE - 1;
  }
}
