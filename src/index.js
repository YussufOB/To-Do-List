import './style.css';
import { setItems, getItems, addTask } from './local_storage.js';

// Create Element function
const createLi = (obj) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const description = document.createElement('input');
  const i = document.createElement('i');
  description.type = 'text';
  description.value = `${obj.description}`;
  description.desabled = true;
  checkbox.type = 'checkbox';
  i.classList.add('fa-solid', 'fa-ellipsis-vertical');
  li.classList.add(obj.id);
  li.classList.add('todos');
  li.append(checkbox, description, i);
  document.querySelector('.taskList').prepend(li);
  if (obj.completed) {
    checkbox.checked = true;
    li.classList.add('checked');
  }
};

// loadTaskList
const loadTaskList = () => {
  const taskList = getItems();
  taskList.sort((a, b) => b.id - a.id)
    .forEach((task) => {
      createLi(task);
    });
};

loadTaskList();

// Add Task to Dom function
const addTasktoDom = (newTask) => {
  addTask(newTask);
  createLi(newTask);
};

// Add Task Event Handler
const addToDo = document.querySelector('.addToDo');
const addBtn = document.querySelector('.addBtn');
const form = document.querySelector('form');

form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addToDo.value === '') {
      addToDo.setCustomValidity('Please add task description.');
    } else {
      e.preventDefault();
      addTasktoDom({ description: addToDo.value });
      addToDo.value = '';
    }
  }
});

addBtn.addEventListener('click', (e) => {
  if (addToDo.value === '') {
    addToDo.setCustomValidity('Please add task description.');
  } else {
    e.preventDefault();
    addTasktoDom({ description: addToDo.value });
    addToDo.value = '';
  }
});

// Re-order function
const reorder = (obj) => {
  let count = 0;
  obj.forEach(() => {
    if (count === 0) {
      obj[count].id = 1;
    } else {
      obj[count].id = obj[count - 1].id + 1;
    }
    count += 1;
  });
};

// Delete task function
const deleteTask = (index) => {
  const taskList = getItems();
  const newTaskList = taskList.filter((task) => task.id !== index);
  reorder(newTaskList);
  setItems(newTaskList);
};

// Edit task function
const editTask = (event) => {
  let index = event.target.parentElement.classList[0];
  index = parseInt(index, 10);
  const taskList = getItems();
  taskList.forEach((item) => {
    if (item.id === index) {
      if (event.target.value.length >= 1) {
        item.description = event.target.value;
        setItems(taskList);
      }
      if (event.target.value.length === 0) {
        const isconfirm = window.confirm('you are about to delete this todo log?');
        if (isconfirm) {
          deleteTask(index);
          event.target.parentElement.remove();
        }
      }
    }
  });
};

// Toggle function
const toggleCompleted = (event) => {
  let index = event.target.parentElement.classList[0];
  index = parseInt(index, 10);
  const taskList = getItems();

  taskList.forEach((item) => {
    if (item.id === index) {
      if (event.target.checked) {
        item.completed = true;
      } else if (!event.target.checked) {
        item.completed = false;
      }
      setItems(taskList);
    }
  });
};

// Event handler of whole document
document.addEventListener('click', (e) => {
  if (e.target.matches('.fa-trash-can')) {
    let index = e.target.parentElement.classList[0];
    index = parseInt(index, 10);
    deleteTask(index);
    e.target.parentElement.remove();
  } else if (e.target.matches('.taskList input[type="text"]')) {
    const element = e.target.parentElement.querySelector('i');
    element.classList.toggle('fa-trash-can');
    element.classList.toggle('fa-ellipsis-vertical');
    element.classList.add('active');

    e.target.classList.toggle('active');
    e.target.addEventListener('input', (event) => {
      editTask(event);
    });
  } else if (e.target.matches('.taskList input[type="checkbox"]')) {
    e.target.addEventListener('change', (event) => {
      toggleCompleted(event);
      if (!e.target.checked) {
        e.target.parentElement.classList.remove('checked');
      } else {
        e.target.parentElement.classList.add('checked');
      }
    });
  }
});

// Clear all completed task function
const clearAllComplete = () => {
  const taskList = getItems();
  const newTaskList = taskList.filter((item) => item.completed === false);
  setItems(newTaskList);
  window.location.reload();
};

// Clear all complete event handler
document.querySelector('.clearButton').addEventListener('click', () => {
  clearAllComplete();
});
