import React, { useState } from 'react'
import './App.css'
import ChildA from './component/ChildA';
import { AppProvider } from './contexts/AppContext'
function App() {
  console.log("App component render")

  return (
    <>
      <AppProvider>
        <h1>App Component</h1>
        <h3>Topic: {topic}</h3>
        <ChildA />
      </AppProvider>
    </>
  )
}

export default App;
