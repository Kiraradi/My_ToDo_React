import React, { useState } from "react";
import styled from "styled-components";

import TodoForm from "../TodoForm/TodoForm";
import TasksList from "../TasksList/TasksList";
import Filter from "../Filter/Filter";

import { createNewTask } from "../../services";

import { COLORS } from "../../constants";

const ToDo = () => {
    const [tasksList, setTasksList] = useState([]);

    const addTaskInList= (text) => {
        const newTask = createNewTask(text);
        setTasksList([...tasksList, newTask])
    }

    const changeStatusTaskById = React.useCallback((id) => {
        setTasksList((prev) => {
            return prev.map(task => {            
                if (task.id === id ) {
                    return {
                        ...task,
                        status: !task.status
                    }
                }
                return task;
            })
        })
    }, [])


    return (
        <StyledToDo>
            <h1 className="title">Todos</h1>
            <TodoForm addTaskInList={addTaskInList}/>
            <Filter/>
            <TasksList tasksList={tasksList} changeStatusTaskById={changeStatusTaskById}/>
        </StyledToDo>
    )
}

export default ToDo;


const StyledToDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 15px;
    background-color: ${COLORS.white};
    max-width: 550px;
    margin: 35px 15px 0;
    border: 3px solid ${COLORS.black};
    border-radius: 15px;

    .title {
        font-size: 45px;
        color: ${COLORS.red};
    }
`

