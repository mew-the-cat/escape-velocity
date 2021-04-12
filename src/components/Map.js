import React from 'react';
import {Cell} from './Cell.js';

export class Map extends React.Component{
      render() {    
      var Cells = [];
      for (var row=0; row<this.props.tiles.length; row++) { 
        for (var col=0; col<this.props.tiles[row].length; col++){ 
          var handleClickTileBound = this.props.onClick.bind(this, col, row);                            
          Cells.push(<Cell key={"Cell" + col + ":"+ row} 
                           coords={{x: col, y: row}} 
                           type={this.props.tiles[col][row].type} 
                           characters={this.props.tiles[col][row].characters} 
                           onClick={handleClickTileBound} />);    
        }  
        Cells.push(<br key={"LineBreak" + row} />);      
      }
      return Cells;
    }
  }