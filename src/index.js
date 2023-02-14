import { projectsContainer, deleteTask } from "./storagestuff";
import { taskFactory, projectFactory } from "./todo";
import { outputTask, outputProjectTasks, getCurrentProject } from "./domstuff";

function main() {
    const main_container = document.createElement('div');
    let project1 = projectFactory('project1');
    let defaultProject = projectFactory('default');
    let current_project = projectsContainer.getCurrentProjectObject();
    // console.log(current_project);
    // console.log(getCurrentProject());

    let task1 = taskFactory('title 1', 'some description 1', new Date(2023, 4, 16), 'low');
    let task2 = taskFactory('title 2', 'some description 2', new Date(2023, 5, 16), 'high');
    let task3 = taskFactory('title 3', 'some description 3', new Date(2023, 5, 16), 'high', 'project1');
    // outputTask(task);

    // defaultProject.addTask(task1);
    // // defaultProject.addTask(task2);
    // current_project.addTask(task2);
    // defaultProject.addTask(task3);
    outputProjectTasks(current_project);

    console.log('after deleting a task');
    // deleteTask(task1.title);
    current_project.editTask(task2.title ,'edited title 2', 'new and improved description 2', new Date(2023, 5, 16), 'high')
    // outputProjectTasks(defaultProject);

    console.log(current_project.getAllTasks());
    console.log(projectsContainer.getProject('project1').getAllTasks());
    // console.log(projectsContainer.getAllProjects());
    return main_container;
}

document.body.appendChild(main());