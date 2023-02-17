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
    const getCurrentProjectObject = () => {
        return projects[getCurrentProject()];
    }

    return {projects, addProject, getProject, getAllProjects, getCurrentProjectObject}
})();

function storeTask(task) {
    projectsContainer.getCurrentProjectObject().addTask(task);
}

function retrieveTask(taskTitle) {
    return projectsContainer.getCurrentProjectObject().getTask(taskTitle);
}

function deleteTask(taskTitle) {
    return projectsContainer.getCurrentProjectObject().deleteTask(taskTitle);
}

function setCurrentProject(projectTitle) {
    localStorage.setItem('currentProject', projectTitle);
}

function getCurrentProject() {
    return localStorage.getItem('currentProject');
}

export { storeTask, retrieveTask, deleteTask, setCurrentProject, getCurrentProject, projectsContainer }