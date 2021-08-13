import { AlertText } from "../models/AlertText";
import { ALERT_VARIANT } from "./ALERT_VARIANTS";

export const ALERT_TEXTS = {
  EMPTY: new AlertText("", "", ALERT_VARIANT.WARNING),
  OUT_OF_AP: new AlertText(
    "Out of Action Points",
    "You are too tired to perform this action and need to chill for a  while. AP recover with time. Action Points recover gradually with time.",
    ALERT_VARIANT.WARNING
  ),
};
