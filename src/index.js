import { projectsContainer, deleteTask } from "./storagestuff";
import { taskFactory, projectFactory } from "./todo";
import { outputTask, outputProjectTasks, createTaskContainer, createNewTaskForm } from "./domstuff";

function main() {
    const main_container = document.createElement('div');
    main_container.id = 'main';

    const tasksContainer = document.createElement('div');
    tasksContainer.id = 'tasks-container';

    // let project1 = projectFactory('project1');
    let defaultProject = projectFactory('default');
    let current_project = projectsContainer.getCurrentProjectObject();

    let taskform = createNewTaskForm();

    // let task1 = taskFactory('title 1', 'some description 1', new Date(2023, 4, 16), 'low');
    // let task1DOM = createTaskContainer(task1);
    // main_container.appendChild(task1DOM);
 
    // outputProjectTasks(current_project);

    main_container.appendChild(taskform);
    main_container.appendChild(tasksContainer);

    return main_container;
}

document.body.appendChild(main());