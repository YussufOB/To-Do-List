// Add Task function
const addTask = (taskList, newTask) => {
  newTask.id = taskList.length + 1 || 1;
  newTask.completed = false;
  taskList.push(newTask);
  return taskList;
};

export default addTask;