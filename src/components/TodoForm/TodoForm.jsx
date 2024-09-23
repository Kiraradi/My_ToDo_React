import { useRef } from "react";
import styled from "styled-components";

import { createNewTask } from "../../services";

const StyledForm = styled.form`
    width: 100%;
`

const StyledInput = styled.input`
    width: 100%;
    height: 35px;
    padding-left: 10px;
    border-radius: 5px;
`

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
            <StyledInput ref={inputRef} placeholder="Что нужно сделать?" />
        </StyledForm>
    )
}

export default TodoForm
