import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Keyboard from './Keyboard.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> 
    <Keyboard />
  </React.StrictMode>,
)
