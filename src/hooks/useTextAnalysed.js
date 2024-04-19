// @ts-check
import { analyseText } from 'esgrammar'
import { useEffect, useState } from 'react'

/**
 * @param {string} text
 * @returns
 */
function useTextAnalysed(text) {
	const [wordsAnalysed, setWordsAnalysed] = useState([])
	const [textAnalysed, setTextAnalysed] = useState('')

	useEffect(() => {
		const makeWordsAnalysed = async () => {
			if (text !== '') {
				setWordsAnalysed(await analyseText(text))
			} else {
				setWordsAnalysed([])
			}
		}

		makeWordsAnalysed()
	}, [text])

	useEffect(() => {
		const makeTextAnalysed = async () => {
			let newText = text

			wordsAnalysed.forEach(word => {
				const newWord = word.syllables
					.join('-')
					.replace(word.tonicSyllable, `<strong>${word.tonicSyllable}</strong>`)

				newText = newText.replace(word.word, newWord)
			})

			setTextAnalysed(newText)
		}

		makeTextAnalysed()
	}, [wordsAnalysed])

	return { wordsAnalysed, textAnalysed }
}

export default useTextAnalysed
