import { useEffect, useState } from 'react'

function useTheme() {
	const [theme, setTheme] = useState(null)

	const DARK_MODE = 'dark'
	const LIGHT_MODE = 'light'

	const getSystemPreference = () =>
		window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_MODE : LIGHT_MODE

	const toggleTheme = () => setTheme(theme === DARK_MODE ? LIGHT_MODE : DARK_MODE)

	useEffect(() => {
		const USER_PREFERENCE = localStorage.getItem('theme')

		setTheme(USER_PREFERENCE)

		if (
			USER_PREFERENCE === null &&
			getSystemPreference() === DARK_MODE
		)
			setTheme(DARK_MODE)
	}, [])

	useEffect(() => {
		if (theme === DARK_MODE) {
			document.documentElement.classList.add(DARK_MODE)
		} else document.documentElement.classList.remove(DARK_MODE)

		if (theme !== null && theme !== getSystemPreference()) {
			localStorage.setItem('theme', theme)
		} else if (theme === getSystemPreference()) localStorage.removeItem('theme')
	}, [theme])

	return { theme, toggleTheme }
}

export default useTheme
