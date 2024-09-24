import { useState } from "react";
import styled from "styled-components";

import TodoForm from "../TodoForm/TodoForm";

import { COLORS } from "../../constants";
import CheckBox from "../../UI/CheckBox/CheckBox";
import TasksList from "../TasksList/TasksList";


const ToDo = () => {
    const [tasksList, setTasksList] = useState([]);

    const addTaskInList = (newTask) => {
        setTasksList([...tasksList, newTask])
    }

    const changeStatusTaskById = (id) => {
        const newTasksList = tasksList.map(task => {
            if (task.id === id ) task.status = !task.status
            return task;
        })

        setTasksList(newTasksList)
    }

    return (
        <StyledToDo>
            <h1 className="title">Todos</h1>
            <TodoForm addTaskInList={addTaskInList}/>
            <TasksList tasksList={tasksList} changeStatusTaskById={changeStatusTaskById}/>
        </StyledToDo>
    )
}

export default ToDo


const StyledToDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 35px;
    width: 100%;
    padding: 15px;
    background-color: ${COLORS.white};
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;

    .title {
        font-size: 45px;
        color: ${COLORS.red};
    }
`

