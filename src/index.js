import { projectsContainer } from "./storagestuff";
import { taskFactory, projectFactory } from "./todo";
import { outputTask, outputProjectTasks } from "./domstuff";

function main() {
    const main_container = document.createElement('div');
    
    let defaultProject = projectFactory('default');

    let task1 = taskFactory('title 1', 'some description 1', new Date(2023, 4, 16), 'low');
    let task2 = taskFactory('title 2', 'some description 2', new Date(2023, 5, 16), 'high');
    let task3 = taskFactory('title 3', 'some description 3', new Date(2023, 5, 16), 'high');
    // outputTask(task);

    defaultProject.addTask(task1);
    defaultProject.addTask(task2);
    defaultProject.addTask(task3);
    outputProjectTasks(defaultProject);

    console.log('after deleting a task');
    defaultProject.deleteTask(task1.title);
    outputProjectTasks(defaultProject);

    console.log(projectsContainer.getAllProjects());
    return main_container;
}

document.body.appendChild(main());