import { projectsContainer, } from "./storagestuff";
import { projectFactory, } from "./todo";
import { createMainDOMContainer, showProjectsInProjectsTab, outputProjectTasks } from "./domstuff";
import './styles.css';

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        const defaultProject = projectFactory('Default');
        showProjectsInProjectsTab();
        outputProjectTasks(projectsContainer.getCurrentProjectObject());
    })
    const main_container = createMainDOMContainer();
        
    return main_container;
}

document.body.appendChild(main());