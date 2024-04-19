import PropTypes from 'prop-types'

function IconButton({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className='grid h-12 w-12 place-items-center rounded *:h-6 *:w-auto *:fill-esgrammar-dark-100 hover:bg-esgrammar-light-200 active:bg-esgrammar-light-300 dark:*:fill-esgrammar-light-200 dark:hover:bg-esgrammar-dark-400 dark:active:bg-esgrammar-dark-500'
		>
			{children}
		</button>
	)
}

IconButton.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
}

function LinkIconButton({ children, href }) {
	return (
		<a
			href={href}
			className='grid h-12 w-12 place-items-center rounded *:h-6 *:w-auto *:fill-esgrammar-dark-100 hover:bg-esgrammar-light-200 active:bg-esgrammar-light-300 dark:*:fill-esgrammar-light-200 dark:hover:bg-esgrammar-dark-400 dark:active:bg-esgrammar-dark-500'
		>
			{children}
		</a>
	)
}

LinkIconButton.propTypes = {
	children: PropTypes.node,
	href: PropTypes.string,
}

export { LinkIconButton, IconButton }
