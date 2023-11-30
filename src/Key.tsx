import React, { useContext } from "react";
import './App.css';

function Key({ keyVal, big }) {

  return (
    <div className = "key" id = {big && "big"}> {keyVal} </div>
  );
}

export default Key;