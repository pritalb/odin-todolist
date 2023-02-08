function storeTask(task) {
    localStorage.setItem(task.title, JSON.stringify(task));
}

function retrieveTask(taskTitle) {
    return JSON.parse(localStorage.getItem(taskTitle));
}

function deleteTask(taskTitle) {
    localStorage.removeItem(taskTitle);
}

export { storeTask, retrieveTask, deleteTask }