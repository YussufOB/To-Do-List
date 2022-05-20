import createList from './createList.js';

const loadTaskList = (taskList) => {
  taskList.sort((a, b) => b.id - a.id)
    .forEach((task) => {
      createList(task);
    });
};
export default loadTaskList;