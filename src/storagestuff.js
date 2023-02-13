function storeTask(task) {
    localStorage.setItem(task.title, JSON.stringify(task));
}

function retrieveTask(taskTitle) {
    return JSON.parse(localStorage.getItem(taskTitle));
}

function deleteTask(taskTitle) {
    localStorage.removeItem(taskTitle);
}

function setCurrentProject(projectTitle) {
    localStorage.setItem('currentProject', projectTitle);
}

function getCurrentProject() {
    localStorage.getItem('currentProject');
}

export { storeTask, retrieveTask, deleteTask, setCurrentProject, getCurrentProject }