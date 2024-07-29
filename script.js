document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        listItem.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});
