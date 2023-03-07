const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

// Event listener for adding a new todo item
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;

    if(todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        // Add event listener to strike through an item when clicked
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });

        // Add event listener to underline an item when hovered
        todoEl.addEventListener('mouseover', () => {
            todoEl.classList.add('hover');
        });
        todoEl.addEventListener('mouseout', () => {
            todoEl.classList.remove('hover');
        });

        // Add event listener to remove an item when double-clicked
        todoEl.addEventListener('dblclick', () => {
            todoEl.remove();
        });

        // Adds the item to the todo-list
        todos.appendChild(todoEl);

        input.value = "";
    }
});

// Add event listener to mark an item as completed when clicked
todoEl.addEventListener('click', () => {
    todoEl.classList.toggle('completed');
    todoEl.classList.toggle('non-actionable');
});
