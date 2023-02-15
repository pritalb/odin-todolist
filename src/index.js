import { projectsContainer, deleteTask } from "./storagestuff";
import { projectFactory } from "./todo";
import { createMainDOMContainer, showProjectsInProjectsTab } from "./domstuff";

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        const defaultProject = projectFactory('default');
        showProjectsInProjectsTab();
    })
    const main_container = createMainDOMContainer();
        
    return main_container;
}

document.body.appendChild(main());