import PropTypes from 'prop-types'

function AnalysisArea({ onChange, value }) {
	return (
		<div className='*:bg-esgrammar-light-100 *:border-esgrammar-light-400 dark:*:bg-esgrammar-dark-300 dark:*:border-esgrammar-dark-400 placeholder:*:text-esgrammar-light-700 dark:placeholder:*:text-esgrammar-dark-700 dark:text-esgrammar-light-100 text-esgrammar-dark-100 font-noto-sans grid h-60 grid-cols-1 *:resize-none *:p-6 *:text-lg *:outline-none md:grid-cols-2'>
			<textarea
				placeholder='Ingrese o pegue algun texto'
				className='border-esgrammar-light-400 rounded-t-lg border-x-2 border-y-2 md:rounded-l-lg md:rounded-r-none'
				onChange={onChange}
			/>
			<div
				className='border-esgrammar-light-400 overflow-auto rounded-b-lg border-x-2 border-b-2 md:rounded-l-none md:rounded-r-lg md:border-y-2 md:border-l-0'
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
