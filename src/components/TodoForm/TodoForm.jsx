import { useRef } from "react";
import styled from "styled-components";

import { createNewTask } from "../../services";
import { COLORS } from "../../constants";

const TodoForm = ({ addTaskInList }) => {
    const inputRef = useRef(null);

    const handleAddTaskInlist = (event) => {
        event.preventDefault();
        const taskText = inputRef.current.value.trim();

        if (taskText) {
            const newTask = createNewTask(taskText);
            addTaskInList(newTask);
            inputRef.current.value = '';
        }

    }

    return (
        <StyledForm onSubmit={handleAddTaskInlist}>
            <input ref={inputRef} className='input' placeholder="Что нужно сделать?"/>
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
