function taskFactory (title, description, duedate, priority) {
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

export { taskFactory, };