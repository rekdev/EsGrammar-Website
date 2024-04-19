import PropTypes from 'prop-types'

function AnalysisTable({ words }) {
	return (
		<div className='bg-esgrammar-light-100 border-esgrammar-light-400 dark:bg-esgrammar-dark-300 dark:border-esgrammar-dark-400 h-96  overflow-auto rounded-lg border-2'>
			<table className=' dark:text-esgrammar-light-100 text-esgrammar-dark-100 font-noto-sans border-esgrammar-light-400 w-full table-fixed border-collapse rounded-lg'>
				<thead className=''>
					<tr className='dark:bg-esgrammar-dark-400 bg-esgrammar-light-200 border-esgrammar-light-400 dark:border-esgrammar-dark-400 sticky top-0 h-12 rounded-t-md  border-b text-left *:pl-6 *:font-medium'>
						<th>Palabra</th>
						<th>Silabas</th>
						<th>Tipo</th>
						<th>Vocales</th>
						<th>Consonantes</th>
					</tr>
				</thead>
				<tbody>
					{words.map(word => (
						<tr
							key={Math.random().toString(36).substr(2, 9)}
							className='border-esgrammar-light-400 dark:border-esgrammar-dark-400 h-12 border-b *:pl-6'
						>
							<td>{word.word}</td>
							<td
								dangerouslySetInnerHTML={{
									__html: word.syllables
										.join('-')
										.replace(
											word.tonicSyllable,
											`<strong>${word.tonicSyllable}</strong>`,
										),
								}}
							/>
							<td>{word.type}</td>
							<td>{word.vowels.join('-')}</td>
							<td>{word.consonants.join('-')}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

AnalysisTable.propTypes = {
	words: PropTypes.array,
}

export default AnalysisTable