import { setCurrentProject, projectsContainer } from "./storagestuff";
import { outputProjectTasks } from "./domstuff";

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
    let newTask = task(title, description, duedate, priority);
    if (projectName === undefined) {
        projectsContainer.getCurrentProjectObject().addTask(newTask);
    } else {
        projectsContainer.getProject(projectName).addTask(newTask);
    }

    return newTask;
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
    setCurrentProject(newProject.name);
    outputProjectTasks(newProject);
    
    return newProject;
}

export { taskFactory, projectFactory };