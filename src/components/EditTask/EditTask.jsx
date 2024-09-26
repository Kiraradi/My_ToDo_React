import React from 'react'
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { editTask } from '../../store/todoSlise';
import Input from '../Input/Input';

const EditTask = (props) => {
    const [taskText, setTaskText] = React.useState(props.task.text);
    const dispatch = useDispatch();

    const onChange = (event) => {
        event.preventDefault();
        setTaskText(event.target.value);
    }

    const handleOnEdit = (event) => {
        event.preventDefault();

        if (!taskText.trim()) {
            return;
        }

        dispatch(editTask(
            {
                newText: taskText,
                id: props.task.id
            }
        ));
        props.toggleEdit();
    }
    return (
        <StyledEditTask>
            <Input className='edit_input' value={taskText} onChange={onChange}/>
            <button className='button_edit_task' onClick={handleOnEdit}></button>
            <button className='button_close_edit' onClick={props.toggleEdit}></button>
        </StyledEditTask>
    )
}

export default EditTask;

const StyledEditTask = styled.div`
    display: flex; 
    align-items: center;
    width: 100%;
    gap: 20px;
    .edit_input {
        width: 100%;
        height: 30px;
        padding-left: 25px;
        border-radius: 5px;
    }

    .button_close_edit {
        width: 30px;
        height: 30px;    
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: center;
        cursor: pointer;
        border: none;
        background-color: ${({theme}) => theme.colors.white};
        background-image: url('/icons/close_image.svg');
    }

    .button_edit_task {
        width: 30px;
        height: 30px;    
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: center;
        cursor: pointer;
        border: none;
        background-color: ${({theme}) => theme.colors.white};
        background-image: url('/icons/icon-check-black.svg');
    }
`
