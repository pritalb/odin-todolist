import { taskFactory } from "./todo";
import { projectsContainer, deleteTask } from "./storagestuff";

function createTaskContainer (task) {
    let container = document.createElement('div');

    let title = document.createElement('div');
    title.className = 'task-title';
    title.innerText = `${task.title}`;

    let description = document.createElement('div');
    description.className = 'task-description';
    description.innerText = `${task.description}`;

    let duedate = document.createElement('div');
    duedate.className = 'task-duedate';
    duedate.innerText = `${task.duedate}`;

    let priority = document.createElement('div');
    priority.className = 'task-priority';
    priority.innerText = `${task.priority}`;
    // title, description, due date and priority

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteTask(task.title);
        outputProjectTasks(projectsContainer.getCurrentProjectObject());
    });

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(duedate);
    container.appendChild(priority);
    container.appendChild(deleteBtn);
    
    return container;
}

function createNewTaskForm () {
    let container = document.createElement('div');
    container.className = 'new-task-form';

    let titleField = document.createElement('input');
    titleField.className = 'task-form-title-field';

    let descriptionField = document.createElement('input');
    descriptionField.className = 'task-form-description-field';

    let duedateField = document.createElement('input');
    duedateField.setAttribute('type', 'date');
    duedateField.className = 'task-form-duedate-field';

    let priorityField = document.createElement('select');
    priorityField.className = 'task-form-priority-field';

    let priority1 = document.createElement('option');
    priority1.innerText = 'High';
    let priority2 = document.createElement('option');
    priority2.innerText = 'Moderate';
    let priority3 = document.createElement('option');
    priority3.innerText = 'Low';
    priorityField.appendChild(priority1);
    priorityField.appendChild(priority2);
    priorityField.appendChild(priority3);

    let submitBtn = document.createElement('button');
    submitBtn.innerText = 'create';
    submitBtn.addEventListener('click', () => {
        let newTask = taskFactory(titleField.value, descriptionField.value, duedateField.value, priorityField.value);
        outputProjectTasks(projectsContainer.getCurrentProjectObject());
    });

    container.appendChild(titleField);
    container.appendChild(descriptionField);
    container.appendChild(duedateField);
    container.appendChild(priorityField);
    container.appendChild(submitBtn);

    return container;
}

function outputTask (task) {
    console.log(
        `title: ${task.title}, description: ${task.description}, due date: ${task.duedate}, priority: ${task.priority}, done?: ${task.checkIfTaskDone()}`
    );
    let taskContainer = createTaskContainer(task);
    document.querySelector('#tasks-container').appendChild(taskContainer);
}

function outputProjectTasks (project) {
    console.log(`outputting all tasks in project: ${project.name}`);
    
    document.querySelector('#tasks-container').innerHTML = '';
    const projectTasks = project.getAllTasks()
    for (const taskName in projectTasks) {
        let task = projectTasks[taskName];
        outputTask(task);
    };
}

export { outputTask, outputProjectTasks, createTaskContainer, createNewTaskForm, };