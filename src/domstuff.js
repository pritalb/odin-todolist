import { taskFactory, projectFactory } from "./todo";
import { projectsContainer, deleteTask, setCurrentProject, getCurrentProject } from "./storagestuff";

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
    
    let titleLabel = document.createElement('div');
    titleLabel.innerText = 'Title:';
    let titleField = document.createElement('input');
    titleField.className = 'task-form-title-field';

    let descriptionLabel = document.createElement('div');
    descriptionLabel.innerText = 'Description:';
    let descriptionField = document.createElement('input');
    descriptionField.className = 'task-form-description-field';

    let duedateLabel = document.createElement('div');
    duedateLabel.innerText = 'Due Date:';
    let duedateField = document.createElement('input');
    duedateField.setAttribute('type', 'date');
    duedateField.className = 'task-form-duedate-field';

    let priorityLabel = document.createElement('div');
    priorityLabel.innerText = 'Priority:';
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

    let titleFieldContainer = document.createElement('div');
    titleFieldContainer.appendChild(titleLabel);
    titleFieldContainer.appendChild(titleField);

    let descriptionFieldContainer = document.createElement('div');
    descriptionFieldContainer.appendChild(descriptionLabel);
    descriptionFieldContainer.appendChild(descriptionField);

    let duedateFieldContainer = document.createElement('div');
    duedateFieldContainer.appendChild(duedateLabel);
    duedateFieldContainer.appendChild(duedateField);

    let priorityFieldContainer = document.createElement('div');
    priorityFieldContainer.appendChild(priorityLabel);
    priorityFieldContainer.appendChild(priorityField);

    container.appendChild(titleFieldContainer);
    container.appendChild(descriptionFieldContainer);
    container.appendChild(duedateFieldContainer);
    container.appendChild(priorityFieldContainer);
    container.appendChild(submitBtn);

    return container;
}

function createProjectForm () {
    let container = document.createElement('div');
    
    let projectNameField = document.createElement('input');
    projectNameField.className = 'project-form-name-field';

    let projectNameLabel = document.createElement('div');
    projectNameLabel.innerText = 'Project Name:';
    projectNameLabel.className = 'project-form-name-label';

    let projectCreateBtn = document.createElement('button');
    projectCreateBtn.innerText = 'Create';
    projectCreateBtn.addEventListener('click', () => {
        let newProject = projectFactory(projectNameField.value);
        showProjectsInProjectsTab();
        outputProjectTasks(newProject);
    })

    container.appendChild(projectNameLabel);
    container.appendChild(projectNameField);
    container.appendChild(projectCreateBtn);

    return container;
}

function createProjectsTab () {
    let container = document.createElement('div');
    container.className = 'projects-tab';

    const projectForm = createProjectForm();
    container.appendChild(projectForm);

    const projectsContainer_DOM = document.createElement('div');
    projectsContainer_DOM.className = 'projects-tab-projects-container';

    container.appendChild(projectForm);
    container.appendChild(projectsContainer_DOM);

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
    
    document.querySelector('.current-project-name').innerText = `${getCurrentProject()}`;
    document.querySelector('#tasks-container').innerHTML = '';
    const projectTasks = project.getAllTasks()
    for (const taskName in projectTasks) {
        let task = projectTasks[taskName];
        outputTask(task);
    };
}

function showProjectsInProjectsTab () {
    let projectsContainer_DOM = document.querySelector('.projects-tab-projects-container');
    projectsContainer_DOM.innerHTML = '';

    let allProjects = projectsContainer.getAllProjects();

    for (let project in allProjects) {
        const projectDiv = document.createElement('div');
        projectDiv.innerText = `${project}`;

        projectDiv.addEventListener('click', () => {
            setCurrentProject(project);
            outputProjectTasks(projectsContainer.getProject(project));
        })

        projectsContainer_DOM.appendChild(projectDiv);
    }
}

function createSidebar () {
    const container = document.createElement('div');
    const SiteName = document.createElement('div');
    const projectsTab = createProjectsTab();

    container.className = 'sidebar';
    SiteName.className = 'sitename';

    SiteName.innerText = 'ToDo App';
    
    container.appendChild(SiteName);
    container.appendChild(projectsTab);
    return container;
}

function createContentArea () {
    const container = document.createElement('div');
    container.className = 'content-section'

    const currentProjectName = document.createElement('div');
    currentProjectName.className = 'current-project-name';

    const tasksContainer = document.createElement('div');
    tasksContainer.id = 'tasks-container';
    
    const taskform = createNewTaskForm();

    container.appendChild(currentProjectName);
    container.appendChild(taskform);
    container.appendChild(tasksContainer);

    return container;
}

function createMainDOMContainer () {
    const main_container = document.createElement('div');
    main_container.id = 'main';

    const sidebar = createSidebar();
    const content = createContentArea();

    main_container.appendChild(sidebar);
    main_container.appendChild(content);

    return main_container;
}

export { createMainDOMContainer, showProjectsInProjectsTab, outputProjectTasks };