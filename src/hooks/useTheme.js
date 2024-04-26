import { useEffect, useState } from 'react'

function useTheme() {
	const [theme, setTheme] = useState(null)

	const getSystemPreference = () =>
		window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	useEffect(() => {
		setTheme(localStorage.getItem('theme'))

		if (
			localStorage.getItem('theme') === null &&
			getSystemPreference() === 'dark'
		)
			setTheme('dark')
	}, [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else document.documentElement.classList.remove('dark')

		if (theme !== null && theme !== getSystemPreference()) {
			localStorage.setItem('theme', theme)
		} else if (theme === getSystemPreference()) localStorage.removeItem('theme')
	}, [theme])

	return { theme, toggleTheme }
}

export default useTheme
