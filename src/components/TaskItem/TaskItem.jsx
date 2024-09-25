import React from "react";
import styled from "styled-components";

import { baseTheme } from "../../theme";
import CheckBox from "../../UI/CheckBox/CheckBox";
import EditTask from "../EditTask/EditTask";

import { useDispatch } from "react-redux";
import { removeTask, toggleStatus } from "../../store/todoSlise";


const TaskItem = (props) => {
  const { task, EditTaskById } = props;
  const [isEditing, setIsEditing] = React.useState(false);
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(removeTask(task.id));
  }

  const toggleStatusById = () => {
    dispatch(toggleStatus(task.id));
  }

  const toggleRename = () => {
    setIsEditing(prev => !prev);
  }

  return (
    <StyledTaskContainer>
      <CheckBox
        id={task.id}
        active={task.status}
        onChange={toggleStatusById}
      />
      {
        isEditing ? (
          <EditTask task={task} EditTaskById={EditTaskById} toggleRename={toggleRename} />
        ) : (
          <>
            <span className={`task_text ${task.status && 'task_text_active'}`}>{task.text}</span>
            <div className="buttons_wrapper">
              <button className="button button_rename" onClick={toggleRename}></button>
              <button className="button button_delete" onClick={deleteTask}></button>
            </div>
          </>
        )
      }

    </StyledTaskContainer>
  )
}

export default React.memo(TaskItem);

const StyledTaskContainer = styled.li`
    display: flex;
    width: 100%;
    gap: 10px;
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border: 1px solid ${baseTheme.colors.grey};
    border-radius: 5px;

    .task_text {
      width: 60%;
      white-space: normal;
      font-size: ${baseTheme.f_size.text};
    }

    @media (max-width: 400px) {
      .task_text {
      font-size: ${baseTheme.f_size.b_des};
    }
    }

    .task_text_active{
      text-decoration: line-through;
      color: ${baseTheme.colors.grey};
    }
    .buttons_wrapper {
      display: flex;
      align-items: baseline;
      gap: 15px;
    }

    .button {
      width: 30px;
      height: 30px;    
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: center;
      cursor: pointer;
      border: none;
      background-color: ${baseTheme.colors.white};
    }

    .button_delete {
      background-image: url('/icons/delete_icon.svg');
    }

    .button_rename {
      background-image: url('/icons/rename_img.svg');
    }
`