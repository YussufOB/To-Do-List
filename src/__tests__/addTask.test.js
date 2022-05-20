import addTask from '../addTask.js';
import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
let taskList = store.getItems();
const newTask = { description: 'Testing todo' };

describe('Add new task to storage', () => {
  taskList = addTask(taskList, newTask);

  test('function existence', () => {
    expect(typeof addTask(taskList, newTask)).toBe('object');
  });
  test('check task added to taskList', () => {
    expect(taskList[3].description).toBe('Testing todo');
  });
  test('default complete status', () => {
    expect(taskList[3].completed).toBe(false);
  });
  test('Id order from 1', () => {
    expect(taskList[0].id).toBe(1);
  });
});