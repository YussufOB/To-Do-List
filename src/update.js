const updateList = (taskList, index) => {
  taskList.forEach((item) => {
    if (item.id === index) {
      if (item.completed) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    }
  });
  return taskList;
};

const clearAllComplete = (taskList) => {
  const filteredTaskList = taskList.filter((item) => item.completed === false);
  return filteredTaskList;
};

export { updateList, clearAllComplete };