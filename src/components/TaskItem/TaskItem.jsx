import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import CheckBox from "../../UI/CheckBox/CheckBox";

import closeImg from '../../images/close_image.svg'

const TaskItem = (props) => {
  const { task, changeStatusTaskById, deleteTaskById } = props;

  const deleteTask = () => {
    deleteTaskById(task.id)
  }

  return (
    <StyledTaskContainer>
      <CheckBox
        id={task.id}
        active={task.status}
        onChange={changeStatusTaskById}
      />
      {task.text}
      <button className="button_close" onClick={deleteTask}></button>
    </StyledTaskContainer>
  )
}

export default React.memo(TaskItem);

const StyledTaskContainer = styled.li`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border: 1px solid ${COLORS.grey};
    border-radius: 5px;

  .button_close {
    width: 30px;
    height: 30px;
    background-image: url(${closeImg});
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: center;
    cursor: pointer;
    border: none;
    background-color: ${COLORS.white};
  }
`