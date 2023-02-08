function print() {
    console.log('js working');
};

function outputTask (task) {
    console.log(
        `title: ${task.title}, description: ${task.description}, due date: ${task.duedate}, priority: ${task.priority}, done?: ${task.checkIfTaskDone()}`
    );
}

export { print, outputTask};