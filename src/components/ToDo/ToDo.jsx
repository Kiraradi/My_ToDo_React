import React from "react";
import styled from "styled-components";

import TodoForm from "../TodoForm/TodoForm";
import TasksList from "../TasksList/TasksList";
import Filter from "../Filter/Filter";

import { useDispatch, useSelector } from "react-redux";
import { toggleStatusAllTasks } from "../../store/todoSlise";
import { itemsLeft } from "../../store/todoSelectors";
import Footer from "../Footer/Footer";

const ToDo = () => {
  const dispatch = useDispatch();

  const activeTasksCounter = useSelector(itemsLeft);
  const tasksList = useSelector(state => state.todo.tasksList);

  const handleToggleStatusAllTasks = () => {
    const newStatus = !!activeTasksCounter;
    dispatch(toggleStatusAllTasks(newStatus));
  }

  return (
    <StyledToDoWrapper>
      <h1 className="title">Todos</h1>
      <div className="todo">
        <div className="menu">
          <button
            className="button_toggle_all"
            onClick={handleToggleStatusAllTasks}
          ></button>
          <TodoForm />
        </div>
        {tasksList.length > 0 && (
          <>
            <Filter />
            <TasksList />
            <Footer />
          </>

        )}
      </div>
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
    font-size: ${({theme}) => theme.f_size.header};
    color: ${({theme}) => theme.colors.red};
  }

  .todo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 15px;
    background-color: ${({theme}) => theme.colors.white};
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .menu{
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
    background-color: ${({theme}) => theme.colors.white};
    background-image: url('/icons/check_all_icon.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25px;
  }

`

