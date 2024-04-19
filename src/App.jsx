import { useEffect, useState } from 'react'

import AnalysisArea from '@/components/AnalysisArea'
import AnalysisTable from '@/components/AnalysisTable'
import Navbar from '@/components/Navbar'

import useTextAnalysed from './hooks/useTextAnalysed'

function App() {
	const [text, setText] = useState('')
	const { wordsAnalysed, textAnalysed } = useTextAnalysed(text)

	useEffect(() => {
		console.log(wordsAnalysed)
	}, [wordsAnalysed])

	useEffect(() => {
		console.log(textAnalysed)
	}, [textAnalysed])

	return (
		<>
			<Navbar />
			<main className='flex w-screen justify-center px-4 pb-6 pt-28'>
				<div className='flex w-screen max-w-7xl flex-col gap-7'>
					<AnalysisArea
						onChange={e => {
							setText(e.target.value)
						}}
						value={textAnalysed}
					>
					</AnalysisArea>
					<AnalysisTable words={wordsAnalysed} />
				</div>
			</main>
		</>
	)
}

export default App
