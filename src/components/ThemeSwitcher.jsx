import { PiMoonStars, PiSun } from 'react-icons/pi'

import { IconButton } from '@/components/Buttons'
import useTheme from '@/hooks/useTheme'

function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<IconButton onClick={toggleTheme}>
				{theme === 'dark' ? <PiMoonStars /> : <PiSun />}
			</IconButton>
		</>
	)
}
export default ThemeSwitcher
