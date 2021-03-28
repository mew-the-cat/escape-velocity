import React from 'react';
import {SETTINGS} from './SETTINGS.js'

export class StatusBar extends React.Component{
    render(){
      return(
      <div>
        <b>Status bar</b><br />
        Turn: {this.props.phase.turn} (00:00:0{this.props.phase.untilTextTurn})<br />
        Action points: {this.props.characters[0].ap} / {SETTINGS.PLAYER_AP_MAX}<br /> 
        Health points: {this.props.characters[0].hp} / {SETTINGS.PLAYER_HP_MAX}     
      </div>
      )
    }
  }  