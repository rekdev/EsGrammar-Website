import PropTypes from 'prop-types'

function AnalysisArea({ onChange, value }) {
	return (
		<div className='grid h-auto grid-cols-1 font-noto-sans text-esgrammar-dark-100 *:border-esgrammar-light-400 *:bg-esgrammar-light-100 *:p-6 *:text-lg *:outline-none placeholder:*:text-esgrammar-light-700 md:h-60 md:grid-cols-2 dark:text-esgrammar-light-100 dark:*:border-esgrammar-dark-400 dark:*:bg-esgrammar-dark-300 dark:placeholder:*:text-esgrammar-dark-700'>
			<textarea
				placeholder='Ingrese o pegue algun texto'
				className='h-40 md:h-full resize-none rounded-t-lg border-x-2 border-y-2 border-esgrammar-light-400 md:rounded-l-lg md:rounded-r-none'
				onChange={onChange}
			/>
			<div
				className='h-40 md:h-full overflow-auto rounded-b-lg border-x-2 border-b-2 border-esgrammar-light-400 md:rounded-l-none md:rounded-r-lg md:border-y-2 md:border-l-0'
				dangerouslySetInnerHTML={{ __html: value }}
			/>
		</div>
	)
}

AnalysisArea.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
}

export default AnalysisArea
