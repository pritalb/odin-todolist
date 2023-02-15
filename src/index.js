import { projectsContainer, deleteTask } from "./storagestuff";
import { projectFactory } from "./todo";
import { createMainDOMContainer, showProjectsInProjectsTab } from "./domstuff";

function main() {
    document.addEventListener('DOMContentLoaded', () => {
        showProjectsInProjectsTab();
    })

    const main_container = createMainDOMContainer();
    const defaultProject = projectFactory('default');
        
    return main_container;
}

document.body.appendChild(main());