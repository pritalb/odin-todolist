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

let projectsContainer = (() => {
    let projects = {};
    const addProject = (project) => {
        projects[project.name] = project;
    }
    const getProject = (projectTitle) => {
        return projects[projectTitle];
    }
    const getAllProjects = () => {
        return projects;
    }

    return {projects, addProject, getProject, getAllProjects}
})();

export { storeTask, retrieveTask, deleteTask, setCurrentProject, getCurrentProject, projectsContainer }