// Storage function

const setItems = (obj) => {
  localStorage.setItem('taskList', JSON.stringify(obj));
};

const getItems = () => {
  const taskList = JSON.parse(localStorage.getItem('taskList') || '[]');
  return taskList;
};

// Add Task function
const addTask = (obj) => {
  const taskList = getItems();
  obj.id = taskList.length + 1 || 1;
  obj.completed = false;
  taskList.push(obj);
  setItems(taskList);
};
export { setItems, getItems, addTask };