function outputTask (task) {
    console.log(
        `title: ${task.title}, description: ${task.description}, due date: ${task.duedate}, priority: ${task.priority}, done?: ${task.checkIfTaskDone()}`
    );
}

function outputProjectTasks (project) {
    console.log(`outputting all tasks in project: ${project.name}`);

    const projectTasks = project.getAllTasks()
    for (const taskName in projectTasks) {
        let task = projectTasks[taskName];
        outputTask(task);
    };
}

export { outputTask, outputProjectTasks };