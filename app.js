//Define UI
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
function loadEventListeners() {
    //Add Task Event
    form.addEventListener('submit', addTask);
}

//Add Task
