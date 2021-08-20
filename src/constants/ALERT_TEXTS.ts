import { AlertText } from "../models/AlertText";
import { ALERT_VARIANT } from "./ALERT_VARIANTS";

export const ALERT_TEXTS = {
  START: new AlertText(
    "Your starship was heavily damaged during an orbital fight...",
    "Pilots managed to perform an emergency landing on the planet below. The vessel is irreversibly damaged. Fellow crew is dead. Endless jungle covering the entire surface.",
    ALERT_VARIANT.PRIMARY
  ),
  OUT_OF_AP: new AlertText(
    "Out of Action Points",
    "You are too tired to perform this action and need to chill for a  while. AP recover with time. Action Points recover gradually with time.",
    ALERT_VARIANT.WARNING
  ),
};
