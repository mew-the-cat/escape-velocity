import React from "react";
import { Phase } from "../models/Phase";
import { Player } from "../models/Player.js";
import { SETTINGS } from "../constants/SETTINGS";

interface StatusBarProps {
  phase: Phase;
  characters: Player[];
}

export const StatusBar: React.FC<StatusBarProps> = ({ phase, characters }) => {
  return (
    <span className="statusbar">
      <b>Status bar</b>
      <br />
      Turn: {phase.turn} (00:00:0{phase.untilNextTurn}){" "}
      <b>{phase.isNight ? "NIGHT" : "DAY"}</b>
      <br />
      Action Points: {characters[0].ap} / {SETTINGS.PLAYER_AP_MAX}
      <br />
      Health Points: {characters[0].hp} / {SETTINGS.PLAYER_HP_MAX}
      <br />
      <br />
      <br />
      <br />
    </span>
  );
};
