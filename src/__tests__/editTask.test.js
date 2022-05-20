import editTask from '../editTask.js';
import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
let taskList = store.getItems();

test('description value change', () => {
  const input = 'My todo edited';
  taskList = editTask(taskList, 1, input);
  expect(taskList[0].description).toBe('My todo edited');
});