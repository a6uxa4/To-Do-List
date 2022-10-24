import React, { useState } from 'react'
import styled from 'styled-components'
import { FcNext } from 'react-icons/fc'

function ToDoInput({ setLiftingUp }) {
	const [valueToDo, setValueToDo] = useState('')

	function handleClick(e) {
		e.preventDefault()
		if (!valueToDo.trim()) return null
		setLiftingUp((prev) => [
			...prev,
			{ value: valueToDo, id: Math.random().toLocaleString() },
		])
		setValueToDo('')
	}
	return (
		<StyledContainerInput>
			<StyledForm onSubmit={handleClick}>
				<StyledInput
					placeholder='ToDoList'
					maxLength='8'
					minLength='1'
					value={valueToDo}
					onChange={(e) => setValueToDo(e.target.value)}
				/>
				<StyledContainerButton onClick={handleClick}>
					<FcNext />
				</StyledContainerButton>
			</StyledForm>
		</StyledContainerInput>
	)
}

const StyledContainerInput = styled.div`
	width: 1250px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const StyledForm = styled.form`
	width: 350px;
	display: flex;
	justify-content: space-around;
`

const StyledInput = styled.input`
	width: 250px;
	height: 50px;
	font-size: 30px;
	font-family: Vernon Adams, Kalapi Gajjar, Cyreal;
	font-weight: bolder;
	border-radius: 12px;
	border: 2px solid #8ea8f2;
	text-align: center;
	background-color: #5f6978;
	color: #8ea8f2;
`
const StyledContainerButton = styled.div`
	width: 50px;
	height: 50px;
	background-color: #5f6978;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid #8ea8f2;
	border-radius: 12px;
`
export default ToDoInput
