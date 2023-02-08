import { taskFactory, } from "./todo";
import { print, outputTask } from "./domstuff";

function main() {
    const main_container = document.createElement('div');
    
    print();
    
    let task = taskFactory('title', 'some description', new Date(2023, 4, 16), 'low');
    outputTask(task);

    return main_container;
}

document.body.appendChild(main());