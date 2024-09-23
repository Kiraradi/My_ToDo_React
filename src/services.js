export const getId = () => {
    return Math.random().toString(16).slice(2)
}

export const createNewTask = (text) => {
    const newTask = {
        id: getId(),
        text: text,
        creationTime: new Date().getTime(),
        isTaskCompleted: false,
    }

    return newTask;
}