const taskForm = document.getElementById('taskForm');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const pendingList = document.getElementById('pendingTasks');
const completedList = document.getElementById('completedTasks');

let tasks = [];

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const timeAdded = new Date().toLocaleString();

  if (title && description) {
    tasks.push({ title, description, timeAdded, completed: false });
    titleInput.value = '';
    descriptionInput.value = '';
    renderTasks();
  }
});

function renderTasks() {
  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const details = document.createElement('div');
    details.className = 'task-details';
    details.innerHTML = `<strong>${task.title}</strong><br>${task.description}<br><small>Added: ${task.timeAdded}</small>`;

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    if (!task.completed) {
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.className = 'complete-btn';
      completeBtn.onclick = () => completeTask(index);
      actions.appendChild(completeBtn);
    }

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = () => editTask(index);
    actions.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTask(index);
    actions.appendChild(deleteBtn);

    li.appendChild(details);
    li.appendChild(actions);

    if (task.completed) {
      completedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  tasks[index].timeCompleted = new Date().toLocaleString();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const task = tasks[index];
  const newTitle = prompt('Edit title:', task.title);
  const newDesc = prompt('Edit description:', task.description);

  if (newTitle && newDesc) {
    task.title = newTitle;
    task.description = newDesc;
    renderTasks();
  }
}
