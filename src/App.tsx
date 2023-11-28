import { useState } from 'react';
import './App.css';
import Game from './Game.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

var HOST = '127.0.0.1';
var PORT = 3000;

function App() {
  const [answer, setAnswer] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplayer Wordle</h1>
      </header>
      
      <div className="d-flex flex-column align-items-center">
        <button onClick = {() => { console.log(fetchSolution()) }}>Singleplayer</button>
        
        <button>Multiplayer</button>
      </div>

      <Game/>
    </div>
  );
}

async function fetchSolution() {
  try {
    const response = await fetch('http://' + HOST + ':' + PORT + '/NewSolution/5');
    const data = await response.json();
    console.log(data[0]);
    
  } catch (error) {
    console.error('Error fetching solution:', error);
  }
}
  
  
  
export default App;
