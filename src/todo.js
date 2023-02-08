function task (title, description, duedate, priority) {
    let finished = false;
    const done = () => {
        finished = true;
        return finished;
    };
    const checkIfTaskDone = () => {
        return finished;
    };

    return {
        title, description, duedate, priority, checkIfTaskDone, done
    };
}

function taskFactory (title, description, duedate, priority) {
    if (typeof(title) === "string" && typeof(description) === "string" && typeof(priority) === "string" && typeof(duedate) === "object") {
        return task(title, description, duedate, priority);
    }
    
    console.error('Wrong argument types! make sure title, description and priority are strings and duedate a Date object');
    return null;
}

export { taskFactory, };