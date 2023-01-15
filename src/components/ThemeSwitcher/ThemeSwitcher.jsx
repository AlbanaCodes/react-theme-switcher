import React, { useEffect, useState } from 'react';
import style from './ThemeSwitcher.module.scss';
import { HiMoon, HiSun } from 'react-icons/hi';
import UseLocalStorage from '../../hooks/UseLocalStorage';

function ThemeSwitcher() {
	const defaultDark = window.matchMedia('(prefer-color-scheme: dark)').matches
	const [theme, setTheme] = useState('light');

	const handleThemeButton = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	
	return (
		<aside>
		<button aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
				role="switch"
				onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
		{
			theme === 'dark' ?
				<HiMoon />
			: <HiSun />
		}
		</button>
		</aside>
	)
}

export default ThemeSwitcher;