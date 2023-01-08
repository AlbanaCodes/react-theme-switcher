import { useState } from 'react';
import './App.scss';
import Heroe from './components/Heroe';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {

  return (
    <div className="App container">
      <Heroe />
	  
	  <ThemeSwitcher />
    </div>
  )
}

export default App;
