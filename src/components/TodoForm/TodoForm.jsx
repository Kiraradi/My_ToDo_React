import React, { useRef } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const TodoForm = (props) => {
    const [taskText, setTaskText] = React.useState('');

    const handelChangeTask = (event) => {
        setTaskText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
         if(!taskText.trim()) return;

         props.addTaskInList(taskText);
         setTaskText('');
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input onChange={handelChangeTask} value={taskText} className='input' placeholder="Что нужно сделать?"/>
        </StyledForm>
    )
}

export default TodoForm

const StyledForm = styled.form`
    width: 100%;

    .input {
        width: 100%;
        height: 40px;
        padding-left: 10px;
        border-radius: 5px;
    }

    .input:focus {
        outline: none;
        border: 3px solid ${COLORS.red};
    }
`
