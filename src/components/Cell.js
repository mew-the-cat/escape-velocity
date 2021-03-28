import React from 'react';

export class Cell extends React.Component{
    constructor(props) {
      super(props);       
    }
  
    render(){  
      if (this.props.characters.length === 0){
        return <button className="cell" onClick={this.props.onClick}>{"(" + this.props.coords.x + ", " + this.props.coords.y + ")"}</button>
      }
      else{
        return <button className="cell-player" onClick={this.props.onClick}>X</button>
  
      }
    }
      
  }  