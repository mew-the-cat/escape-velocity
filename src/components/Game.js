import React from 'react';
import '../styles/App.css';

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
      initialTiles[5][5].characters.push(new Player(SETTINGS.PLAYER_HP_MAX, SETTINGS.PLAYER_AP_MAX, SETTINGS.POSITION_START.x, SETTINGS.POSITION_START.y));  
  
      var initialCharacters = [];
      initialCharacters.push(new Player(SETTINGS.PLAYER_HP_MAX, SETTINGS.PLAYER_AP_MAX, SETTINGS.POSITION_START.x, SETTINGS.POSITION_START.y));
  
      var initialPhase = new Phase();
      
      this.state = {
        tiles: initialTiles,
        characters: initialCharacters,
        phase: initialPhase,
      };      
  
      this.handleClickTile = this.handleClickTile.bind(this);    
      this.handleClickSearch = this.handleClickSearch.bind(this);   
      this.handleClickItemInventory = this.handleClickItemInventory.bind(this); 
      this.handleClickItemTile = this.handleClickItemTile.bind(this); 
  
      setInterval(this.gameLoop.bind(this), 1000);
    }
  
  
    gameLoop() {   
      if (this.state.phase.untilTextTurn > 1) {
        var updatedTiles = this.state.tiles
        var updatedCharacters = this.state.characters; 
        var updatedPhase = this.state.phase;
  
        updatedPhase.untilTextTurn -= 1;
      }
      else{
        var updatedTiles = this.state.tiles
  
        var updatedCharacters = this.state.characters;    
        if (updatedCharacters[0].ap < 4){
          updatedCharacters[0].ap += 1;
        }    
  
        var updatedPhase = this.state.phase;
        updatedPhase.turn += 1;
        updatedPhase.untilTextTurn = 5;      
      }
  
      this.setState({
        tiles: updatedTiles,
        characters: updatedCharacters,
        phase: updatedPhase,
      });    
    }
  
    render(){      
      return (
        <table>
          <tbody>
            <tr>
              <td rowSpan="3">
                <Map tiles={this.state.tiles} onClick={this.handleClickTile} />
              </td>
              <td colSpan="2" className="aux-window">
                <StatusBar phase={this.state.phase} characters={this.state.characters} />
              </td>
            </tr>
            <tr>          
              <td colSpan="2" className="aux-window">
                <ActionBar onClick={this.handleClickSearch} />
              </td>
            </tr>
            <tr>          
              <td className="aux-window">
                <InventoryBar characters={this.state.characters} onClick={this.handleClickItemInventory} />
              </td>
              <td className="aux-window">
                <TileBar tiles={this.state.tiles} characters={this.state.characters} onClick={this.handleClickItemTile} />
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  
    handleClickTile(col, row){    
      if (this.state.characters[0].ap > 0){    
        if (this.distCellToCharacter(col, row) === 1){ 
          this.state.characters[0].ap -= 1;
  
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
  
          var updatedPhase = this.state.phase;    
  
          this.setState({
            tiles: updatedTiles,
            characters: updatedCharacters,
            phase: updatedPhase,
          });     
        }
      }
      else{
        alert("You are out of action points");
      }    
    } 
    
    handleClickSearch() {
      if (this.state.characters[0].ap > 0){  
        this.state.characters[0].ap -= 1 
        var fillPosition = -1;     
        for (var i=0; i<this.state.characters[0].inventory.size; i++){
          if (this.state.characters[0].inventory.slots[i] === ITEM_REGISTRY[0]){
            var fillPosition = i;          
            break;
          }
        }
  
        if (fillPosition !== -1){
          let randomIndex = Math.floor(Math.random() * ITEM_REGISTRY.length);
        
          var updatedCharacters = this.state.characters;
          updatedCharacters[0].inventory.slots[fillPosition] = ITEM_REGISTRY[randomIndex];
          
          var updatedTiles = this.state.tiles;
          var updatedPhase = this.state.phase;    
  
          this.setState({
            tiles: updatedTiles,
            characters: updatedCharacters,
            phase: updatedPhase,
          });     
        }
        else{
          alert("Inventory is full");
        }    
        
      }
      else{
        alert("You are out of action points");
      }
  }
  
  handleClickItemInventory(slot){  
    if (this.state.characters[0].inventory.slots[slot].id != ITEM_REGISTRY[0].id){
      var x = this.state.characters[0].coords.x;
      var y = this.state.characters[0].coords.y;
  
      var updatedCharacters = this.state.characters; 
      var updatedTiles = this.state.tiles;
      var updatedPhase = this.state.phase; 
  
      updatedTiles[x][y].items.push(this.state.characters[0].inventory.slots[slot])
      updatedCharacters[0].inventory.slots[slot] = ITEM_REGISTRY[0];
  
      this.setState({
        tiles: updatedTiles,
        characters: updatedCharacters,
        phase: updatedPhase,
      }); 
    }
  }
    
    handleClickItemTile(slot){  
        var fillPosition = -1;     
        for (var i=0; i<this.state.characters[0].inventory.size; i++){
          if (this.state.characters[0].inventory.slots[i] === ITEM_REGISTRY[0]){
            var fillPosition = i;          
            break;
          }
        }
  
        if (fillPosition !== -1){
          var x = this.state.characters[0].coords.x;
          var y = this.state.characters[0].coords.y;
  
          var updatedCharacters = this.state.characters; 
          var updatedTiles = this.state.tiles;
          var updatedPhase = this.state.phase; 
  
          updatedCharacters[0].inventory.slots[fillPosition] = this.state.tiles[x][y].items[slot];
          updatedTiles[x][y].items.splice(slot, 1);     
  
          this.setState({
            tiles: updatedTiles,
            characters: updatedCharacters,
            phase: updatedPhase,
          }); 
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
  
  class StatusBar extends React.Component{
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
  
  class ActionBar extends React.Component{
    render(){
      return(
        <div>
          <b>Actions</b><br/ >
          <input className="action" type="button" value="Search" onClick={this.props.onClick} />
        </div>
      )
    }
  }
  
  class InventoryBar extends React.Component{
    render(){
      var itemListComponents = new Array(this.props.characters[0].inventory.size)
      for (var i=0; i<itemListComponents.length; i++){
        var handleClickItemInventoryBound = this.props.onClick.bind(this, i);
        itemListComponents[i] = <div key={"ItemInventoryDiv" + i} >
                                  <input className="item"
                                         type="submit" key={"ItemInventoryInput" + i}  
                                         value={this.props.characters[0].inventory.slots[i].name} 
                                         onClick={handleClickItemInventoryBound} />
                                </div>
      }
      return( 
        <div>
          <b>Inventory</b><br/ >        
          {itemListComponents}          
        </div>
      )
    }
  }
  
  class TileBar extends React.Component{
    render(){ 
      var x = this.props.characters[0].coords.x;
      var y = this.props.characters[0].coords.y;
      var itemListComponents = new Array(this.props.tiles[x][y].items)
      for (var i=0; i<this.props.tiles[x][y].items.length; i++){
        var handleClickItemTileBound = this.props.onClick.bind(this, i);
        itemListComponents[i] = <div key={"ItemTileDiv" + i} >
                                  <input className="item"
                                         type="submit" key={"ItemTileInput" + i} 
                                         value={this.props.tiles[x][y].items[i].name} 
                                         onClick={handleClickItemTileBound}/>
                                </div>
      }      
      return( 
        <div>
          <b>Tile ({this.props.characters[0].coords.x}, {this.props.characters[0].coords.y})</b><br/>         
          {itemListComponents}          
        </div>
      )
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
    constructor(hp, ap, x, y){
      this.hp = hp;
      this.ap = ap;
      this.coords = {
        x: x,
        y: y,
      }
      this.inventory = new Inventory(6);
    }  
  }
  
  class Tile {
    constructor(x, y){    
      this.coords = {
        x: x,
        y: y,
      }
      this.characters = [];
      this.items = [];
    }    
  }
  
  class Phase {
    constructor(){
      this.turn = 1;
      this.isNight = false;
    }
    untilTextTurn = SETTINGS.DURATION_TURN;
  }
  
  class Item {
    constructor(id, name){
      this.id = id;
      this.name = name;
    }
  }
  
  class Inventory {
    constructor(inventorySize){
      this.size = inventorySize;
      this.slots = new Array(inventorySize);
      for (var i=0; i<this.slots.length; i++ ){
        this.slots[i] = ITEM_REGISTRY[0];
      }
    }
  }
  
  const ITEM_REGISTRY = [
    new Item(0, " "),
    new Item(1, "Log"),
    new Item(2, "Iron Ore"),
    new Item(3, "Stone"),
    new Item(4, "Flint"),
    new Item(5, "Stick"),
    new Item(6, "Jade"),
    new Item(7, "Fruits"),
    new Item(8, "Nuts"),
    new Item(9, "Broken metal plates"),
    new Item(10, "Broken coil"),
  ]
  
  const SETTINGS = {
    DURATION_TURN: 5,
    POSITION_START: {x: 5, y: 5},
    INVENTORY_SIZE: 6,
    PLAYER_HP_MAX: 100,
    PLAYER_AP_MAX: 4,
  }

  export default Game;