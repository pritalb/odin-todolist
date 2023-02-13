import { setCurrentProject, getCurrentProject } from "./storagestuff";

function task (title, description, duedate, priority) {
    let finished = false;
    const done = () => {
        finished = true;
        return finished;
    };
    const checkIfTaskDone = () => {
        return finished;
    };

    return {
        title, description, duedate, priority, checkIfTaskDone, done
    };
}

function taskFactory (title, description, duedate, priority) {
    if (typeof(title) === "string" && typeof(description) === "string" && typeof(priority) === "string" && typeof(duedate) === "object") {
        let newTask = task(title, description, duedate, priority);
        // storeTask(newTask);

        return newTask;
    }
    
    console.error('Wrong argument types! make sure title, description and priority are strings and duedate a Date object');
    return null;
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
    const getAllTasks = () => {
        return tasks;
    }

    return {
        name, addTask, getTask, getAllTasks, deleteTask,
    }
}

function projectFactory (name) {
    let newProject = project(name);
    setCurrentProject(newProject.name)
    return newProject;
}

export { taskFactory, projectFactory };