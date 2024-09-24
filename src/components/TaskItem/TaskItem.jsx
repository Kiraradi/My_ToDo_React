import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import CheckBox from "../../UI/CheckBox/CheckBox";
import RenameTask from "../RenameTask/RenameTask";

import closeImg from '../../images/close_image.svg'
import renameImg from '../../images/rename_img.svg'


const TaskItem = (props) => {
  const [isRename, setRename] = React.useState(false);
  const { task, changeStatusTaskById, deleteTaskById, renameTaskById } = props;

  const deleteTask = () => {
    deleteTaskById(task.id)
  }

  const toggleRename = () => {
    setRename(prev => !prev);
  }


  return (
    <StyledTaskContainer>
      {
        isRename ? (
          <RenameTask task={task} renameTaskById={renameTaskById} toggleRename={toggleRename}/>
        ) : (
          <>
            <CheckBox
              id={task.id}
              active={task.status}
              onChange={changeStatusTaskById}
            />
            <span className="task_text">{task.text}</span>            
            <div className="buttons_wrapper">
              <button className="button button_rename" onClick={toggleRename}></button>
              <button className="button button_close" onClick={deleteTask}></button>
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
    min-height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border: 1px solid ${COLORS.grey};
    border-radius: 5px;
    .task_text {
      width: 60%;
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
      background-color: ${COLORS.white};
    }

    .button_close {
      background-image: url(${closeImg});
    }

    .button_rename {
      background-image: url(${renameImg});
    }
`