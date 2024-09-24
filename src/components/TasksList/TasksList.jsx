import styled from "styled-components";
import TaskItem from "../TaskItem/TaskItem";

const TasksList = (props) => {
  return (
    <TaskListContainer>
      {props.tasksList.map((task) => {
        return <TaskItem task={task} changeStatusTaskById={props.changeStatusTaskById}/>
      })}
    </TaskListContainer>
  )
}

export default TasksList

const TaskListContainer = styled.ul `
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`