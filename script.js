document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const taskText = input.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="remove-btn">Remove</button>
        `;

        const removeBtn = li.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        list.appendChild(li);
        input.value = '';
    });
});
