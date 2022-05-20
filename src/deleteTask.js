/* eslint-disable no-restricted-syntax */
const reorder = (taskList) => {
  let count = 0;
  taskList.forEach(() => {
    if (count === 0) {
      taskList[count].id = 1;
    } else {
      taskList[count].id = taskList[count - 1].id + 1;
    }
    count += 1;
  });
  return taskList;
};

const deleteTask = (taskList, index) => {
  const newTaskList = taskList.filter((task) => task.id !== index);
  const orderedTaskList = reorder(newTaskList);
  return orderedTaskList;
};

export default deleteTask;