import React from 'react'
import styled from 'styled-components'
import TodoItemList from './TodoItemList'
import { RiDeleteBinLine } from 'react-icons/ri'

function ToDoList({ liftingUp, setLiftingUp }) {
	function handleDeleteList(id) {
		const Delete = liftingUp.filter((item) => item.id !== id)
		setLiftingUp(Delete)
	}
	return (
		<StyledContainerListBox>
			{liftingUp.map((el) => {
				return (
					<StyledContainerList key={el.id}>
						<StyledZagalovok>
							{el.value}
							<StyledDeleteIcons
								onClick={() => handleDeleteList(el.id)}
							>
								<RiDeleteBinLine />
							</StyledDeleteIcons>
						</StyledZagalovok>
						<TodoItemList />
					</StyledContainerList>
				)
			})}
		</StyledContainerListBox>
	)
}

const StyledContainerListBox = styled.div`
	width: 1000px;
	display: flex;
	justify-content: space-around;
`
const StyledDeleteIcons = styled.div`
	width: 30px;
	height: 30px;
	cursor: pointer;
`
const StyledContainerList = styled.div`
	width: 200px;
	height: 300px;
	border-radius: 12px;
	background-color: #5f6978;
	border: 2px solid #8ea8f2;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const StyledZagalovok = styled.h1`
	width: 180px;
	height: 40px;
	margin: 5px;
	background-color: #38404b;
	border-radius: 12px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #8ea8f2;
`
export default ToDoList
