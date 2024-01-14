let inputTask = document.getElementById('input-task');
let taskContainer = document.getElementById('task-container');

function addTask() {
    if (inputTask.value === '') {
        alert('Input a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputTask.value;
        taskContainer.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputTask.value = '';
}

taskContainer.addEventListener( 'click', function (e) {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})

