import React, { useState } from 'react'
import styled from 'styled-components'
import { BiLayerPlus } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

function TodoItemList() {
	const [valueToDoList, setValueToDoList] = useState('')
	const [renderList, setRenderList] = useState([])
	function handleClickList(e) {
		e.preventDefault()
		if (!valueToDoList.trim()) return null
		setRenderList([
			...renderList,
			{ value: valueToDoList, id: Math.random().toLocaleString() },
		])
		setValueToDoList('')
	}
	function handleDelete(id) {
		const Delete = renderList.filter((item) => item.id !== id)
		setRenderList(Delete)
	}
	return (
		<>
			<StyledContainerInputIcons onSubmit={handleClickList}>
				<StyledInputList
					onChange={(e) => setValueToDoList(e.target.value)}
					value={valueToDoList}
				/>
				<StyledContainerIconsList onClick={handleClickList}>
					<BiLayerPlus />
				</StyledContainerIconsList>
			</StyledContainerInputIcons>
			<StyledContainerItemList>
				{renderList.map((el) => {
					return (
						<StyledContainerText key={el.id}>
							<StyledTextItemsList draggable={true}>
								{el.value}
							</StyledTextItemsList>
							<StyledContainerIconsItemList
								onClick={() => handleDelete(el.id)}
							>
								<RiDeleteBinLine />
							</StyledContainerIconsItemList>
						</StyledContainerText>
					)
				})}
			</StyledContainerItemList>
		</>
	)
}
const StyledContainerInputIcons = styled.form`
	width: 180px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const StyledContainerIconsList = styled.div`
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #8ea8f2;
	border-radius: 8px;
	cursor: pointer;
`
const StyledInputList = styled.input`
	width: 140px;
	height: 20px;
	border: none;
	border-radius: 8px;
	background-color: #8ea8f2;
	color: #38404b;
	font-size: 15px;
`
const StyledContainerText = styled.div`
	width: 180px;
	height: 30px;
	display: flex;
	align-items: center;
	border-radius: 8px;
	justify-content: space-around;
	background-color: #8ea8f2;
`
const StyledContainerIconsItemList = styled.div`
	cursor: pointer;
`
const StyledTextItemsList = styled.span``
const StyledContainerItemList = styled.div`
	width: 180px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`
export default TodoItemList
