import './App.css';
import React from 'react';

function App() {
  return (
    <Game />
  );
}

class Game extends React.Component{
  constructor(props){
    super(props);   

    var initialTiles = new Array(11);
    for (var col=0; col<initialTiles.length; col++) {     
      initialTiles[col]=new Array(11);    
      for (var row=0; row<initialTiles[col].length; row++){
        initialTiles[col][row] = new Tile(col, row);
      }
    }
    initialTiles[5][5].characters.push(new Player(100, 5, 5));  

    var initialCharacters = [];
    initialCharacters.push(new Player(100, 5, 5));

    
    this.state = {
      tiles: initialTiles,
      characters: initialCharacters,
    };      

    this.handleClickTile = this.handleClickTile.bind(this);
  }

  render(){      
    return (
      <Map tiles={this.state.tiles} onClick={this.handleClickTile} />
    );
  }

  handleClickTile(col, row){      
    if (this.distCellToCharacter(col, row) == 1){ 
      var oldCoords = this.state.characters[0].coords;
      var oldX = oldCoords.x;
      var oldY = oldCoords.y;

      var updatedCharacters = this.state.characters;
      updatedCharacters[0].coords = {
        x: col, 
        y: row,
      }

      var updatedTiles = this.state.tiles;
      updatedTiles[oldX][oldY].characters = [];
      updatedTiles[col][row].characters.push(updatedCharacters[0]);

      this.setState({
        tiles: updatedTiles,
        characters: updatedCharacters,
      });     
    }
    else{
    
    }
  }  

  distCellToCharacter(col, row){    
    return Math.max(Math.abs(this.state.tiles[col][row].coords.x - this.state.characters[0].coords.x), Math.abs(this.state.tiles[col][row].coords.y - this.state.characters[0].coords.y));   
  }

}

class Map extends React.Component{
  constructor(props){
    super(props);
  }

  render() {    
    var Cells = [];
    for (var row=0; row<this.props.tiles.length; row++) { 
      for (var col=0; col<this.props.tiles[row].length; col++){ 
        var handleClickTileBound = this.props.onClick.bind(this, col, row);                            
        Cells.push(<Cell key={"Cell" + col + ":"+ row} coords={{x: col, y: row}} characters={this.props.tiles[col][row].characters} onClick={handleClickTileBound} />);         
      }  
      Cells.push(<br key={"LineBreak" + row} />);      
    }
    return Cells;
  }
}

class Cell extends React.Component{
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

class Player {
  constructor(hp, x, y){
    this.hp = hp;
    this.coords = {
      x: x,
      y: y,
    }
  }
}

class Tile {
  constructor(x, y){    
    this.coords = {
      x: x,
      y: y,
    }
    this.characters = [];
  }    
}

export default App;
