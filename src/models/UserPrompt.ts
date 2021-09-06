import { ALERT_TEXTS } from "../constants/ALERT_TEXTS";
import { AlertText } from "./AlertText";

export class UserPromt {
  alertActive: AlertText;
  untilAlertDismissed: number;

  constructor() {
    this.alertActive = ALERT_TEXTS.START;
    this.untilAlertDismissed = 600;
  }
}
