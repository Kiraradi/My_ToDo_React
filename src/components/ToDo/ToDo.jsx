import { useState } from "react";
import styled from "styled-components";

import TodoForm from "../TodoForm/TodoForm";

import { COLORS } from "../../constants";
import CheckBox from "../../UI/CheckBox/CheckBox";


export const StyledToDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 35px;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;

    .title {
        font-size: 45px;
        color: ${COLORS.red};
    }
`
const StyledTitle = styled.h1 `
    font-size: 45px;
    color: ${COLORS.red};
`
const ToDo = () => {
    const [tasksList, setTasksList] = useState([]);

    const addTaskInList = (newTask) => {
        setTasksList([...tasksList, newTask])
    }

    return (
        <StyledToDo>
            {/* <StyledTitle>Todos</StyledTitle> */}
            <h1 className="title">Todos</h1>

            <CheckBox active={true}/>
            <TodoForm addTaskInList={addTaskInList}/>
            {tasksList.map((task, index) => {
                console.log(task)
                return <div key={index} >{task.text}</div>
            })}
        </StyledToDo>
    )
}

export default ToDo

