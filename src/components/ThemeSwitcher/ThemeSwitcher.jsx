import React, { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import UseLocalStorage from '../../hooks/UseLocalStorage';

function ThemeSwitcher() {
	const defaultDark = window.matchMedia('(prefer-color-scheme: dark)').matches;
	const [theme, setTheme] = UseLocalStorage('react-theme.theme', defaultDark ? "dark" : "light");

	const handleThemeButton = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		document.documentElement.setAttribute('color-scheme', theme);
	}, [theme]);
	
	return (
		<aside >
		<button aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
				role="switch"
				onClick={handleThemeButton}>
		{
			theme === 'light' ?
				<HiMoon />
			: <HiSun />
		}
		</button>
		</aside>
	)
}

export default ThemeSwitcher;