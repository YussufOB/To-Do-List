import './style.css';
import deleteTask from './deleteTask.js';
import addTask from './addTask.js';
import createList from './createList.js';
import loadTaskList from './loadTaskList.js';
import editTask from './editTask.js';
import { update, clearAllComplete } from './update.js';
import LocalStorage from './storage.js';

// creating instance of local storage
const store = new LocalStorage();
loadTaskList(store.getItems());

const addToDo = document.querySelector('.addToDo');
const form = document.querySelector('form');

// event handler for input form
form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addToDo.value === '') {
      addToDo.setCustomValidity('Please add task description.');
    } else {
      e.preventDefault();
      const tasklist = store.getItems();
      const newTask = { description: addToDo.value };
      const updatedList = addTask(tasklist, newTask);
      createList(newTask);
      addToDo.value = '';
      store.setItems(updatedList);
    }
  }
});

// events handler for other parts of the app
document.addEventListener('click', (e) => {
  const taskList = store.getItems();
  if (e.target.matches('.fa-trash-can')) {
    let index = e.target.parentElement.classList[0];
    index = parseInt(index, 10);
    const newTasklist = deleteTask(taskList, index);
    store.setItems(newTasklist);
    window.location.reload();
  } else if (e.target.matches('.taskList input[type="text"]')) {
    const element = e.target.parentElement.querySelector('i');
    element.classList.toggle('fa-trash-can');
    element.classList.toggle('fa-ellipsis-vertical');
    e.target.parentElement.classList.toggle('active');
    e.target.classList.toggle('active');
    e.target.addEventListener('input', (event) => {
      let index = event.target.parentElement.classList[0];
      index = parseInt(index, 10);
      const input = event.target.value;
      const editedTaskList = editTask(taskList, index, input);
      store.setItems(editedTaskList);
    });
  } else if (e.target.matches('.taskList input[type="checkbox"]')) {
    e.target.addEventListener('change', (event) => {
      let index = event.target.parentElement.classList[0];
      index = parseInt(index, 10);
      const updatedList = update(taskList, index);
      store.setItems(updatedList);
      if (!e.target.checked) {
        e.target.parentElement.classList.remove('checked');
      } else {
        e.target.parentElement.classList.add('checked');
      }
    });
  } else if (e.target.matches('.clearButton')) {
    const sortedList = clearAllComplete(taskList);
    store.setItems(sortedList);
    window.location.reload();
  } else if (e.target.matches('.refresh')) {
    const sortedList = clearAllComplete(taskList);
    store.setItems(sortedList);
    window.location.reload();
  } else if (e.target.matches('.addBtn')) {
    if (addToDo.value === '') {
      addToDo.setCustomValidity('Please add task description.');
    } else {
      e.preventDefault();
      const tasklist = store.getItems();
      const newTask = { description: addToDo.value };
      const updatedList = addTask(tasklist, newTask);
      createList(newTask);
      addToDo.value = '';
      store.setItems(updatedList);
    }
  }
});