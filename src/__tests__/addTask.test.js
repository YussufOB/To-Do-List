import { addTask, setItems, getItems } from '../local_storage.js';
import LocalStorage from '../__mocks__/local_storage.js';

// create instance of store
const testStore = new LocalStorage();
const newTask = { description: 'Test dumming task' };
let testList = testStore.getItems();

describe('Add task to local storage', () => {
  testList = addTask(testList, newTask);

  test('');
});