import { update, clearAllComplete } from '../update.js';

import LocalStorage from '../__mocks__/storage.js';

const store = new LocalStorage();
let taskList = store.getItems();

describe('Update clear all completed tasks', () => {
  test('updated task status ', () => {
    taskList = update(taskList, 3);
    expect(taskList[2].completed).toBe(true);
  });

  test('check for the existence of completed task',
    () => {
      taskList = clearAllComplete(taskList);
      taskList.forEach((task) => expect(task.completed).toBe(false));
    });
});