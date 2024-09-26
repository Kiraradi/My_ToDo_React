import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCompletedTasks } from '../../store/todoSlise';
import { itemsLeft } from '../../store/todoSelectors';

const Footer = () => {
    const dispatch = useDispatch();

    const activeTasksCounter = useSelector(itemsLeft);

    const handleDeleteCompletedTasks = () => {
        dispatch(deleteCompletedTasks());
    }

    return (
        <StyledFooter>
            <p>Осталось задач : {activeTasksCounter}</p>
            <button className="delete_all_task" onClick={handleDeleteCompletedTasks}>
                Удалить завершенные
            </button>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        z-index: 1;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }

    .delete_all_task {
        background-color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.black};
        border-radius: 5px;
        cursor: pointer;
        padding: 5px;
        z-index: 2;
    }
`



