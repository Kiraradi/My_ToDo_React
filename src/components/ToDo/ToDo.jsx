import React from "react";
import styled from "styled-components";

import TodoForm from "../TodoForm/TodoForm";
import TasksList from "../TasksList/TasksList";
import Filter from "../Filter/Filter";

import { COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompletedTasks, toggleStatusAllTasks } from "../../store/todoSlise";
import { itemsLeft } from "../../store/todoSelectors";

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
    <StyledToDoWrapper>
      <h1 className="title">Todos</h1>
      <StyledToDo>
      
      <header className="header">
        <button 
          className="button_toggle_all"
          onClick={handleToggleStatusAllTasks}
        ></button>
        <TodoForm/>
      </header>      
      {tasksList.length > 0 && (
        <>
          <Filter/>
          <TasksList/>
          <div className="footer">
            <p>Осталось задач : {activeTasksCounter}</p>
            <button className="delete_all_task" onClick={handleDeleteCompletedTasks}>
              Удалить завершенные
            </button>
          </div>
        </>

      )}
    </StyledToDo>
    </StyledToDoWrapper>

  )
}

export default ToDo;

const StyledToDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 550px;
  margin: 35px 15px 0;

  .title {
        font-size: 45px;
        color: ${COLORS.red};
    }

`
const StyledToDo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 15px;
    background-color: ${COLORS.white};
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

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

    .footer::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      z-index: 1;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }

    .delete_all_task {
        background-color: ${COLORS.white};
        border: 2px solid ${COLORS.black};
        border-radius: 5px;
        cursor: pointer;
        padding: 5px;
        z-index: 2;
    }
`

