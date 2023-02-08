import { taskFactory, projectFactory } from "./todo";
import { outputTask, outputProjectTasks } from "./domstuff";
import { retrieveTask, deleteTask } from "./storagestuff";

function main() {
    const main_container = document.createElement('div');
    
    let defaultProject = projectFactory('default');

    let task1 = taskFactory('title 1', 'some description 1', new Date(2023, 4, 16), 'low');
    let task2 = taskFactory('title 2', 'some description 2', new Date(2023, 5, 16), 'high');
    // outputTask(task);

    defaultProject.addTask(task1);
    defaultProject.addTask(task2);
    outputProjectTasks(defaultProject);
    return main_container;
}

document.body.appendChild(main());