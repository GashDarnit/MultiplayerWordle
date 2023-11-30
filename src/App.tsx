import { useState, createContext, useEffect } from 'react';
import './App.css';
import Game from './Game.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import { boardDefault, generateWordSet } from "./Words";

var HOST = '127.0.0.1';
var PORT = 3000;

export const AppContext = createContext();

function App() {
  const [answer, setAnswer] = useState('');
  const [wordLength, setWordLength] = useState(5);
  const [board, setBoard] = useState(generateBoard(5));
  

    const handleWordLength = () => {
        setWordLength(7);
    }

    const handleNewBoard = () => {
        let newArray = generateBoard(wordLength);
        setBoard(newArray);
    }
    
    
  
  return (
    <div className="App">    
        <header className="App-header">
            <h1>Multiplayer Wordle</h1>
        </header>
      
        <AppContext.Provider 
            value = {{
                answer,
                wordLength,
                setWordLength,
                board,
                setBoard,
            }}
        >
            
            <div className="d-flex flex-column align-items-center">
                <button onClick = {() => { console.log(fetchSolution()) }}>Singleplayer</button>

                <button onClick = {handleWordLength}>Multiplayer {wordLength}</button>
                
                <button onClick = {handleNewBoard}>Test {board[0][0]}</button>
                
            </div>

            <Game length ='3'/>
        
        </AppContext.Provider>
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

function generateBoard(length) {
    let newArray = [];

    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < length; j++) {
            row.push("");
        }
        newArray.push(row);
    }
    return newArray;
}

  
export default App;
