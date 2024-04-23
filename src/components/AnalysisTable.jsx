import PropTypes from 'prop-types'

function AnalysisTable({ words }) {
	return (
		<div className='relative h-96 w-full overflow-auto rounded-lg border-2 border-esgrammar-light-400 bg-esgrammar-light-100 dark:border-esgrammar-dark-400 dark:bg-esgrammar-dark-300'>
			{words.length !== 0 ? (
				<table className='w-full table-auto border-collapse rounded-lg border-esgrammar-light-400 font-noto-sans text-esgrammar-dark-100 dark:text-esgrammar-light-100'>
					<thead>
						<tr className='sticky top-0 h-12 rounded-t-md border-b border-esgrammar-light-400 bg-esgrammar-light-200 text-left  *:pl-6 *:font-medium dark:border-esgrammar-dark-400 dark:bg-esgrammar-dark-400'>
							<th>Palabra</th>
							<th>Silabas</th>
							<th>Tipo</th>
							<th>Vocales</th>
							<th>Consonantes</th>
						</tr>
					</thead>
					<tbody>
						{words.map((word, key) => {
							let wordType = ''

							if (word.type === 'monosilaba') wordType = 'Monosilaba'
							else if (word.type === 'oxitona') wordType = 'Aguda'
							else if (word.type === 'paroxitona') wordType = 'Grave'
							else if (word.type === 'proparoxitona') wordType = 'Esdrújula'
							else if (word.type === 'superproparoxitona')
								wordType = 'Sobreesdrújula'

							return (
								<tr
									key={key}
									className='h-12 border-b border-esgrammar-light-400 *:pl-6 dark:border-esgrammar-dark-400'
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
									<td>{wordType}</td>
									<td>{word.vowels.join('-')}</td>
									<td>{word.consonants.join('-')}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			) : (
				<p className='absolute grid h-full w-full place-content-center text-lg text-esgrammar-dark-500 dark:text-esgrammar-light-500'>
					Nada para mostrar
				</p>
			)}
		</div>
	)
}

AnalysisTable.propTypes = {
	words: PropTypes.array,
}

export default AnalysisTable
