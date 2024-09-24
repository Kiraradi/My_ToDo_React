import React from 'react'
import styled from "styled-components";
import { COLORS } from "../../constants";
import closeImg from '../../images/close_image.svg'
import checkImg from '../../images/icon-check.png';

const RenameTask = (props) => {
    const [taskText, setTaskText] = React.useState(props.task.text);

    const handleOnChange = (event) => {
        event.preventDefault();
        setTaskText(event.target.value)
    }

    const handleOnRename = (event) => {
        event.preventDefault();

        if(!taskText.trim()) return;

        props.renameTaskById(props.task.id, taskText);
        props.toggleRename();
    }
  return (
    <StyledRenameTask onSubmit={(event) => {event.preventDefault()}}>
        <input className='rename_input' value={taskText}  onChange={handleOnChange}/>
        <button className='button_rename_task' onClick={handleOnRename}></button>
        <button className='button_close_rename' onClick={props.toggleRename}></button>
    </StyledRenameTask>
  )
}

export default RenameTask

const StyledRenameTask = styled.form `
    display: flex; 
    align-items: center;
    width: 100%;
    gap: 20px;
    .rename_input {
        width: 100%;
        height: 30px;
        padding-left: 25px;
        border-radius: 5px;
    }

    .button_close_rename {
        width: 30px;
        height: 30px;    
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: center;
        cursor: pointer;
        border: none;
        background-color: ${COLORS.white};
        background-image: url(${closeImg});
    }

    .button_rename_task {
        width: 30px;
        height: 30px;    
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: center;
        cursor: pointer;
        border: none;
        background-color: ${COLORS.white};
        background-image: url(${checkImg});
    }
`
