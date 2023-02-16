import { projectsContainer, deleteTask,  } from "./storagestuff";
import { projectFactory, taskFactory, } from "./todo";
import { createMainDOMContainer, showProjectsInProjectsTab, outputProjectTasks } from "./domstuff";
import './styles.css';

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        const defaultProject = projectFactory('default');
        const tempTask = taskFactory('Task title', 'This is some task description', '2023/12/12', 'High');
        showProjectsInProjectsTab();
        outputProjectTasks(projectsContainer.getCurrentProjectObject());
    })
    const main_container = createMainDOMContainer();
        
    return main_container;
}

document.body.appendChild(main());