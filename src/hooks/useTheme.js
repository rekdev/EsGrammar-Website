import { useEffect, useState } from 'react'

function useTheme() {
	const [theme, setTheme] = useState(null)

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	useEffect(() => setTheme(localStorage.getItem('theme')), [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else document.documentElement.classList.remove('dark')

		if (theme !== null) localStorage.setItem('theme', theme)
	}, [theme])

	return { theme, toggleTheme }
}

export default useTheme
