import React from "react";
import { Phase } from "../models/Phase.js";
import { Player } from "../models/Player.js";
import { SETTINGS } from "../constants/SETTINGS.js";

interface StatusBarProps {
  phase: Phase;
  characters: Player[];
}

export class StatusBar extends React.Component<StatusBarProps> {
  render() {
    return (
      <div>
        <b>Status bar</b>
        <br />
        Turn: {this.props.phase.turn} (00:00:0{this.props.phase.untilTextTurn})
        <br />
        Action points: {this.props.characters[0].ap} / {SETTINGS.PLAYER_AP_MAX}
        <br />
        Health points: {this.props.characters[0].hp} / {SETTINGS.PLAYER_HP_MAX}
      </div>
    );
  }
}
