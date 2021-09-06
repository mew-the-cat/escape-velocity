import { ALERT_TEXTS } from "../constants/ALERT_TEXTS";
import { SETTINGS } from "../constants/SETTINGS";
import { AlertText } from "./AlertText";

export class Phase {
  turn: number;
  untilNextTurn: number;
  isNight: boolean;
  alertActive: AlertText;
  untilAlertDismissed: number;

  constructor() {
    this.turn = 1;
    this.untilNextTurn = SETTINGS.DURATION_TURN;
    this.isNight = false;
    this.untilAlertDismissed = 0;
    this.alertActive = ALERT_TEXTS.START;
    this.untilAlertDismissed = 600;
  }
}
