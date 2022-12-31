import React, { useState } from 'react';
import style from './ThemeSwitcher.module.scss';
import { HiMoon, HiSun } from 'react-icons/hi';

function ThemeSwitcher() {
	const [theme, setTheme] = useState('light');

	const handleThemeButton = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<>
		<button aria-label={`Change theme to ${theme === "light" ? "dark" : "light"} mode`}
				role="switch"
				onClick={handleThemeButton}>
		{
			theme === 'light' ?
				<HiMoon />
			: <HiSun />
		}
		</button>
		</>
	)
}

export default ThemeSwitcher;