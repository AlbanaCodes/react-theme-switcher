import { useState } from 'react';
import './App.scss';
import Heroe from './components/Heroe';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App container dark">
			<Navbar />
			<Heroe />
			
			<ThemeSwitcher />
		</div>
	)
}

export default App;
