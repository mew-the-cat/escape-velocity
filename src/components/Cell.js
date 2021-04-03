import React from 'react';
import { TILETYPE_REGISTRY } from './TILETYPE_REGISTRY';

export class Cell extends React.Component{
    constructor(props) {
      super(props);       
    }
  
    render(){  
      if (this.props.characters.length === 0){
        var suffixPlayer = "";
        var textLabel = "(" + this.props.coords.x + ", " + this.props.coords.y + ")";
        //var textLabel = this.props.type.name;
      }
      else{
        var suffixPlayer = "-player";
        var textLabel = "X";
      }   
      switch(this.props.type.name){
        case TILETYPE_REGISTRY[0].name:
          var suffixTile = "-forest";          
          break;
        case TILETYPE_REGISTRY[1].name:
          var suffixTile = "-starship";
          break;
        case TILETYPE_REGISTRY[2].name:
          var suffixTile = "-impactclearing";
          break;
        default:
          var suffixTile = "";
          break;
      }      
      return <button 
              className={"tile" + suffixTile + suffixPlayer} 
              onClick={this.props.onClick}>
                {textLabel}
             </button>
    }
      
  }  