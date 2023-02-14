import { projectsContainer, deleteTask } from "./storagestuff";
import { taskFactory, projectFactory } from "./todo";
import { outputTask, outputProjectTasks, createTaskContainer, } from "./domstuff";

function main() {
    const main_container = document.createElement('div');
    let project1 = projectFactory('project1');
    let defaultProject = projectFactory('default');
    let current_project = projectsContainer.getCurrentProjectObject();

    let task1 = taskFactory('title 1', 'some description 1', new Date(2023, 4, 16), 'low');
    let task1DOM = createTaskContainer(task1);
    main_container.appendChild(task1DOM);
 
    outputProjectTasks(current_project);

    return main_container;
}

document.body.appendChild(main());