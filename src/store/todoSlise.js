import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentFilter: 'All',
    tasksList: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTasks(state, action) {
            state.tasksList.push(action.payload)
        },
        removeTask(state, action) {
            const id = action.payload;
            state.tasksList = state.tasksList.filter(task => task.id !== id)
        },
        toggleStatus(state, action) {
            const id = action.payload;
            state.tasksList = state.tasksList.map(task => {
                if(task.id === id) {
                    task.status = !task.status;
                }

                return task;
            })
        },
        editTask(state, action) {
            const {newText, id} = action.payload;

            state.tasksList = state.tasksList.map(task => {
                if(task.id === id) {
                    task.text = newText;
                }

                return task;
            })
        },
        changeCurrentFilter(state, action) {
            const newFilter = action.payload

            state.currentFilter = newFilter;
        },
        deleteCompletedTasks(state) {
            state.tasksList = state.tasksList.filter(task => task.status === false);
        },
        toggleStatusAllTasks(state, action) {
            const newStatus = action.payload
            state.tasksList = state.tasksList.map((task) => {
                task.status = newStatus
                return task
            });
        }
    }
})

export default todoSlice.reducer;
export const {addTasks, removeTask, toggleStatus, editTask, changeCurrentFilter, deleteCompletedTasks, toggleStatusAllTasks} = todoSlice.actions;

const tasksList = (state) => state.todo.tasksList;
const currentFilter = (state) => state.todo.currentFilter;

export const filretedTasksList = createSelector([tasksList,currentFilter], (tasksList, currentFilter) => {
    switch (currentFilter) {
        case 'All':
            return tasksList;
        case 'Active':
            return tasksList.filter(task => task.status === false);
        case 'Completed':
            return tasksList.filter(task => task.status === true);
    }
})

export const itemsLeft = createSelector([tasksList], (tasksList) => {
    return tasksList.filter(task => task.status === false).length
})