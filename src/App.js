import { useState } from 'react'
import styled from 'styled-components'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {
	const [liftingUp, setLiftingUp] = useState([])

	return (
		<StyledContainerApp>
			<ToDoInput setLiftingUp={setLiftingUp} />
			<StyledContainerList>
				<ToDoList liftingUp={liftingUp} setLiftingUp={setLiftingUp} />
			</StyledContainerList>
		</StyledContainerApp>
	)
}
const StyledContainerApp = styled.div`
	width: 1280px;
	height: 720px;
	background-color: #38404b;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 3px solid #8ea8f2;
`
const StyledContainerList = styled.div`
	width: 1200px;
	height: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
export default App
