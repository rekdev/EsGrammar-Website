import { PiMoonStars, PiSun } from 'react-icons/pi'

import { IconButton } from '@/components/Buttons'
import useTheme from '@/hooks/useTheme'

function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<IconButton onClick={toggleTheme}>
				{theme === 'dark' ? <PiSun /> : <PiMoonStars />}
			</IconButton>
		</>
	)
}
export default ThemeSwitcher
