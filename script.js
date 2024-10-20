const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const newTodo = todoInput.value;

  if (newTodo) {
    const todo = {
      id: Date.now(),
      task: newTodo,
      completed: false,
    };
    todos.push(todo);
    todoInput.value = '';
    renderTodos();
  }
});

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo.task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteTodo(todo.id);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

renderTodos();
