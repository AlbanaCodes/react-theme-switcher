import { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {

  return (
    <div className="App">
      <Navbar />

	  <ThemeSwitcher />
    </div>
  )
}

export default App;
