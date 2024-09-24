import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import CheckBox from "../../UI/CheckBox/CheckBox";

const TaskItem = (props) => {
  const {task, changeStatusTaskById} = props;

  return (
    <StyledTaskContainer>
        <CheckBox 
          active={task.status}
          changeActive={()=> changeStatusTaskById(task.id)}
        />
        {task.text}
    </StyledTaskContainer>
  )
}

export default TaskItem;

const StyledTaskContainer = styled.li `
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border: 1px solid ${COLORS.grey};
    border-radius: 5px;
`