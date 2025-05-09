function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const removeBtn = document.createElement('span');
    removeBtn.textContent = '❌';
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  
    taskInput.value = '';
  }
  