import { projectsContainer, deleteTask,  } from "./storagestuff";
import { projectFactory, taskFactory, } from "./todo";
import { createMainDOMContainer, showProjectsInProjectsTab, outputProjectTasks } from "./domstuff";
import './styles.css';

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        const defaultProject = projectFactory('Default');
        const tempTask = taskFactory('Task title', 'This is some task description', '2023/12/12', 'High');
        const tempTask2 = taskFactory('Task title 2', 'This is some other task description', '2023/12/10', 'Moderate');
        showProjectsInProjectsTab();
        outputProjectTasks(projectsContainer.getCurrentProjectObject());
    })
    const main_container = createMainDOMContainer();
        
    return main_container;
}

document.body.appendChild(main());