//Find elements
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

// addTask
form.addEventListener('submit', addTask)

// deleteTask
tasksList.addEventListener('click', deleteTask)

// mark the task completed
tasksList.addEventListener('click', doneTask)


// functions
function addTask(event) {
    // cancel form
    event.preventDefault()

    // get the text from the input field
    const tastText = taskInput.value;

    const taskHTML = `
    <li class="list-group-item d-flex jusify-content-between task-item">
        <span class="task-title">${tastText}</span>
        <div class="task-item__buttons">
            <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
            <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
            </button>
        </div>
    </li>`

    // add task per page
    tasksList.insertAdjacentHTML('beforeend', taskHTML)

    // clear input field and return focus by him
    taskInput.value = ''
    taskInput.focus();

    if(tasksList.children.length > 1){
        emptyList.classList.add('none')
    }
}

function deleteTask(event) {
    // check, that click wasn't in button "delete button"
    if(event.target.dataset.action !== 'delete') return;

    // check, that click was in button "delete button"
    const parentNode = event.target.closest('.list-group-item');
    parentNode.remove();

    // check. If in list more than one element, close block
    if(tasksList.children.length === 1){
        emptyList.classList.remove('none')
    }
}

function doneTask(event){
    // check, that click was in button "task was complete"
    if(event.target.dataset.action !== 'done') return;

    // check, that click was in button "task was complete"
    const parentNode = event.target.closest('.list-group-item');
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done');
}