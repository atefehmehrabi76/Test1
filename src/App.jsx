import './App.css';
import React, { useState } from 'react';
import Box from './components/Box';
import InputContext from './context/inputContext';


function App() {
  const[name,setName]=useState("");
  const contextValue={
    label:"Your Name",
    type:"text",
    placeHolder:"enter your name",
    handleKey:(e)=>{setName(e.target.value)}
  }
  return (
    <>
    <InputContext.Provider value={contextValue}>
      <Box/>
    </InputContext.Provider>
    <p>{name}</p>
    </>
  )
}

export default App