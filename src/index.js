import './style.css';
import loadData from './todolist.js';

window.onload = loadData();

const settings = document.querySelector('.settings');
const taskMenu = document.querySelector('.task-menu');
settings.addEventListener('click', () => {
  taskMenu.style.display = 'inherit';
  taskMenu.style.transform = 'scale(1)';
});