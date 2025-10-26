const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const themeToggle = document.getElementById('themeToggle');

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteBtn">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';

  // Toggle complete on click
  li.querySelector('span').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete task
  li.querySelector('.deleteBtn').addEventListener('click', () => {
    li.remove();
  });
});

// Dark/Light mode toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀ Light Mode' : '🌙 Dark Mode';
});