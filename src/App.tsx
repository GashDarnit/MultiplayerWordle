import { useState } from 'react';
import './App.css';
import Game from './Game.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './Game.tsx';

function App() {
  const [answer, setAnswer] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplayer Wordle</h1>
      </header>
      
      <div className="d-flex flex-column align-items-center">
        <button onClick = {() => { console.log(fetchSolution()) }}>Singleplayer</button>
        
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

async function fetchSolution() {
  try {
    const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
    const data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.error('Error fetching solution:', error);
  }
}
export default App;
