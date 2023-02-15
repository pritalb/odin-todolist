import { projectsContainer, deleteTask } from "./storagestuff";
import { projectFactory } from "./todo";
import { createMainDOMContainer } from "./domstuff";

function main() {
    const main_container = createMainDOMContainer();

    let defaultProject = projectFactory('default');
    // let current_project = projectsContainer.getCurrentProjectObject();

    return main_container;
}

document.body.appendChild(main());