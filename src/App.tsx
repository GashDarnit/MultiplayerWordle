import React from 'react';
import './App.css';
import Game from './Game.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplayer Wordle</h1>
      </header>
      <div className="d-flex flex-column align-items-center">
        <button>Singleplayer</button>
        
        <button onClick = {() => {
            let socket = new WebSocket('ws://localhost:3000');
            
            socket.addEventListener('open', (event) => {
              console.log('Connected to the WebSocket server');
            });
            
        }}>Multiplayer</button>
      </div>

      <Game/>
    </div>
  );
}


export default App;
