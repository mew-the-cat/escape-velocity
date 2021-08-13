import React from "react";
import { Phase } from "../models/Phase";
import { Player } from "../models/Player.js";
import { SETTINGS } from "../constants/SETTINGS";

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
        Turn: {this.props.phase.turn} (00:00:0{this.props.phase.untilNextTurn})
        <br />
        Action Points: {this.props.characters[0].ap} / {SETTINGS.PLAYER_AP_MAX}
        <br />
        Health Points: {this.props.characters[0].hp} / {SETTINGS.PLAYER_HP_MAX}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
