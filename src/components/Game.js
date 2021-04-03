import React from 'react';
import '../styles/App.css';

import {Phase} from './Phase.js';
import {Player} from './Player.js';
import {Tile} from './Tile.js';

import {Map} from './Map.js';
import {StatusBar} from './StatusBar.js';
import {ActionBar} from './ActionBar.js';
import {InventoryBar} from './InventoryBar.js';
import {TileBar} from './TileBar.js';

import {SETTINGS} from './SETTINGS.js';
import {ITEM_REGISTRY} from './ITEM_REGISTRY.js';
import {TILETYPE_REGISTRY} from './TILETYPE_REGISTRY.js';

class Game extends React.Component{
    constructor(props){
      super(props);   
  
      var initialTiles = new Array(11);
      for (var col=0; col<initialTiles.length; col++) {     
        initialTiles[col]=new Array(11);    
        for (var row=0; row<initialTiles[col].length; row++){
          initialTiles[col][row] = new Tile(TILETYPE_REGISTRY[0], col, row);
        }
      }
      // Set initial tiles
      initialTiles[5][5].characters.push(new Player(SETTINGS.PLAYER_HP_MAX, SETTINGS.PLAYER_AP_MAX, SETTINGS.POSITION_START.x, SETTINGS.POSITION_START.y));  
      initialTiles[5][5].type = TILETYPE_REGISTRY[1];
      initialTiles[4][4].type = TILETYPE_REGISTRY[2];
      initialTiles[5][4].type = TILETYPE_REGISTRY[2];
      initialTiles[6][4].type = TILETYPE_REGISTRY[2];
      initialTiles[4][5].type = TILETYPE_REGISTRY[2];
      initialTiles[6][5].type = TILETYPE_REGISTRY[2];
      initialTiles[4][6].type = TILETYPE_REGISTRY[2];
      initialTiles[5][6].type = TILETYPE_REGISTRY[2];
      initialTiles[6][6].type = TILETYPE_REGISTRY[2];
      

      // Set initial characters
      var initialCharacters = [];
      initialCharacters.push(new Player(SETTINGS.PLAYER_HP_MAX, SETTINGS.PLAYER_AP_MAX, SETTINGS.POSITION_START.x, SETTINGS.POSITION_START.y));
  
       // Set initial phase
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
  
  export default Game;