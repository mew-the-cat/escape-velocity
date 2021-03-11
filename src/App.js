import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <Game />
  );
}

class Game extends React.Component{
  render(){
    return (
      <Map />
    );
  }
}

class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      worldSizeX: 12,
      worldSizeY: 8,
    };  
  }

  render() {
    var tiles = [];
    var id = 0;
    for (var i=0; i<this.state.worldSizeY; i++) {      
      for (var j=0; j<this.state.worldSizeY; j++) {
        tiles.push(<Tile key={id} />);
        id += 1;        
      }
      tiles.push(<br key={id} />)
      id += 1; 
    }
    return(tiles);
  }
}

class Tile extends React.Component{
  render(){
    return(
      <button className="tile">X</button>
    );
  }
}

export default App;
