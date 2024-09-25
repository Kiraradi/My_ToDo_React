import React from "react";

import styled from "styled-components";
import TaskItem from "../TaskItem/TaskItem";
import { useSelector } from "react-redux";
import { filretedTasksList } from "../../store/todoSlise";

const TasksList = () => {
  const filteredList = useSelector(filretedTasksList)

  return (
    <TaskListContainer>
      {filteredList.map((task) => {
        return <TaskItem
          key={task.id}
          task={task}
        />
      })}
    </TaskListContainer>
  )
}

export default React.memo(TasksList);

const TaskListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`