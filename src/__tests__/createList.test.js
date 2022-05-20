/**
 *@jest-environment jsdom
 */

import createList from '../createList.js';

beforeAll(() => {
  document.body.innerHTML = `<div class="container">'
         + '<h1>Today To Do <i class="fa-solid fa-arrows-rotate"></i></h1>'
         + '<form>'
           + '<input type="text" class="addToDo" required placeholder="Add to your list...">'
           + '<i class="fa-solid fa-arrow-turn-down"></i>'
         + '</form>'
         + '<ul class="taskList"></ul>'
         + '<p class="clearButton">Clear all completer</p>'
       + '</div>`;
});

test('create <li> with description', () => {
  const newTask = { id: 2, description: 'my new task', completed: false };
  createList(newTask);
  expect(document.querySelector('ul input[type="text"]').value).toBe('my new task');
});