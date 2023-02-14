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

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(duedate);
    container.appendChild(priority);
    
    return container;
}


function outputTask (task) {
    console.log(
        `title: ${task.title}, description: ${task.description}, due date: ${task.duedate}, priority: ${task.priority}, done?: ${task.checkIfTaskDone()}`
    );
    // let taskContainer = createTaskContainer(task);
    // document.querySelector('#main').appendChild(taskContainer);
}

function outputProjectTasks (project) {
    console.log(`outputting all tasks in project: ${project.name}`);

    const projectTasks = project.getAllTasks()
    for (const taskName in projectTasks) {
        let task = projectTasks[taskName];
        outputTask(task);
    };
}

export { outputTask, outputProjectTasks, createTaskContainer, };