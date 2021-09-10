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
  NO_SEARCH_ZONE: new AlertText(
    "Can't Search the Starship",
    "It's your old school ship you have flown half of the Galaxy with! You know every single crack and fissure. There is nothing surpsiring you can find. Try exploring the planet surface instead.",
    ALERT_VARIANT.WARNING
  ),
  CRAFT_NO_COMBINATION: new AlertText(
    "Engeneering Attempt Failed",
    "You tried to tinker around with these items with no palpable success. It looks like you can't combine them into anything more or less interesting.",
    ALERT_VARIANT.WARNING
  ),
  CRAFT_NO_ITEMS: new AlertText(
    "No Enough Items",
    "Load at least 2 items in the Engineering Bay in order to process them.",
    ALERT_VARIANT.WARNING
  ),
  CRAFT_SUCCESS: new AlertText(
    "Engeneering Attempt Successful",
    "You managed to process materials into a structurally more complex item!",
    ALERT_VARIANT.SUCCESS
  ),
  CONSTRUCTION_NO_ITEMS: new AlertText(
    "No Enough Items",
    "Some items required in the blueprint are missing. Ensure to store them in the starhip storage [5, 5].",
    ALERT_VARIANT.WARNING
  ),
  CONSTRUCTION_SUCCESS: new AlertText(
    "Construction Successful",
    "You have managed to build a new construction according to the blueprint!",
    ALERT_VARIANT.SUCCESS
  ),
  VICTORY: new AlertText(
    "Emergency Beacon is Online [VICTORY]",
    "This piece of scrap assembled with glue and duct tape on your knees seems to work! After 4 nervous hours of waiting amid the endleess forest a rescue spacecraft appears on the horizon. You desperate call hor help wa heard. You got a ticket out of this hell!",
    ALERT_VARIANT.VICTORY
  ),
};
