function click_botao() {
}

const campo2 = document.getElementById("campo2")
const botao2 = document.getElementById('botao2')

botao2.addEventListener('click', click_botao)

document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const todoInput = document.getElementById('todo-input');

    var todoText = todoInput.value.trim();
    todoText = 'todo ' + todoText + '.'

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
