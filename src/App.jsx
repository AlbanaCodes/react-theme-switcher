import { useState } from 'react';
import './App.scss';
import Heroe from './components/Heroe';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {
	return (
		<div className="App flex">
			<Heroe />			
			<ThemeSwitcher />
		</div>
	)
}

export default App;
