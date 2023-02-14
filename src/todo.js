import { setCurrentProject, getCurrentProject, projectsContainer } from "./storagestuff";

function task (arg_title, arg_description, arg_duedate, arg_priority) {
    let finished = false;
    let title = arg_title;
    let description = arg_description;
    let duedate = arg_duedate;
    let priority = arg_priority;

    const done = () => {
        finished = true;
        return finished;
    };
    const checkIfTaskDone = () => {
        return finished;
    };

    return {
        title, description, duedate, priority, checkIfTaskDone, done,
    };
}

function taskFactory (title, description, duedate, priority, projectName) {
    // if (typeof(title) === "string" && typeof(description) === "string" && typeof(priority) === "string" && typeof(duedate) === "object") {
        let newTask = task(title, description, duedate, priority);
        // storeTask(newTask);
        if (projectName === undefined) {
            projectsContainer.getCurrentProjectObject().addTask(newTask);
        } else {
            projectsContainer.getProject(projectName).addTask(newTask);
        }

        return newTask;
    // }
    
    // console.error('Wrong argument types! make sure title, description and priority are strings and duedate a Date object');
    // return null;
}

function project (name) {
    let tasks = {};
    const addTask = (task) => {
        tasks[task.title] = task;
    }
    const deleteTask = (taskTitle) => {
        delete tasks[taskTitle];
    }
    const getTask = (taskTitle) => {
        return tasks[taskTitle];
    }
    const editTask = (title, newTitle, newDescription, newDuedate, newPriority) => {
        let newTask = taskFactory(newTitle, newDescription, newDuedate, newPriority);
        tasks[newTitle] = newTask;
        delete tasks[title];
    }
    const getAllTasks = () => {
        return tasks;
    }

    return {
        name, addTask, getTask, getAllTasks, deleteTask, editTask,
    }
}

function projectFactory (name) {
    let newProject = project(name);
    projectsContainer.addProject(newProject);
    setCurrentProject(newProject.name)
    return newProject;
}

export { taskFactory, projectFactory };