import React, { useState } from "react";
import styled from "styled-components";

import TodoForm from "../TodoForm/TodoForm";
import TasksList from "../TasksList/TasksList";
import Filter from "../Filter/Filter";

import { COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompletedTasks, itemsLeft, toggleStatusAllTasks } from "../../store/todoSlise";

const ToDo = () => {
  const dispatch = useDispatch();

  const activeTasksCounter  = useSelector(itemsLeft);
  const tasksList = useSelector(state => state.todo.tasksList);

  const handleDeleteCompletedTasks = () => {
    dispatch(deleteCompletedTasks())
  }

  const handleToggleStatusAllTasks = () => {
    const newStatus = !!activeTasksCounter
    dispatch(toggleStatusAllTasks(newStatus))
  }

  return (
    <StyledToDo>
      <h1 className="title">Todos</h1>
      <header className="header">
        <button 
          className="button_toggle_all"
          onClick={handleToggleStatusAllTasks}
        ></button>
        <TodoForm/>
      </header>
      
      <Filter/>
      <TasksList/>
      {tasksList.length > 0 && (
        <div className="footer">
          <p>Осталось задач : {activeTasksCounter}</p>
          <button className="delete_all_task" onClick={handleDeleteCompletedTasks}>
            Удалить завершенные
          </button>
        </div>
      )}
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

    .header{
      display: flex;
      width: 100%;
      gap: 10px;
      align-items: center;
    }

    .button_toggle_all {
      width: 30px;
      height: 30px;
      border: none;
      cursor: pointer;
      background-color: ${COLORS.white};
      background-image: url('/icons/check_all_icon.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: 25px;
    }

    .footer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .delete_all_task {
        background-color: ${COLORS.white};
        border: 2px solid ${COLORS.black};
        border-radius: 5px;
        cursor: pointer;
        padding: 5px;
    }
`

