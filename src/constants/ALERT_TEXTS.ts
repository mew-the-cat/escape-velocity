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
  CRAFT_NO_COMBINATION: new AlertText(
    "Engeneering Attempt Failed",
    "You tried to tinker around with these items with no palpable success. It looks like you can't combine them into anything more or less interesting.",
    ALERT_VARIANT.WARNING
  ),
  CRAFT_NO_ITEMS: new AlertText(
    "Not Enough Items",
    "Load at least 2 items in the Engineering Bay in order to process them.",
    ALERT_VARIANT.WARNING
  ),
  CRAFT_SUCCESS: new AlertText(
    "Engeneering Attempt Successful",
    "You managed to process materials into a structurally more complex item.",
    ALERT_VARIANT.SUCCESS
  ),
};
