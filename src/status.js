// import { setItems, getItems } from './local_storage.js';
// // Toggle function
// const toggleCompleted = (event) => {
//   let index = event.target.parentElement.classList[0];
//   index = parseInt(index, 10);
//   const taskList = getItems();

//   taskList.forEach((item) => {
//     if (item.id === index) {
//       if (event.target.checked) {
//         item.completed = true;
//       } else if (!event.target.checked) {
//         item.completed = false;
//       }
//       setItems(taskList);
//     }
//   });
// };

// // Re-order function
// const reorder = (obj) => {
//   let count = 0;
//   obj.forEach(() => {
//     if (count === 0) {
//       obj[count].id = 1;
//     } else {
//       obj[count].id = obj[count - 1].id + 1;
//     }
//     count += 1;
//   });
// };

// // Delete task function
// const deleteTask = (index) => {
//   const taskList = getItems();
//   const newTaskList = taskList.filter((task) => task.id !== index);
//   reorder(newTaskList);
//   setItems(newTaskList);
// };

// // Edit task function
// const editTask = (event) => {
//   let index = event.target.parentElement.classList[0];
//   index = parseInt(index, 10);
//   const taskList = getItems();
//   taskList.forEach((item) => {
//     if (item.id === index) {
//       if (event.target.value.length >= 1) {
//         item.description = event.target.value;
//         setItems(taskList);
//       }
//       if (event.target.value.length === 0) {
//         const isconfirm = window.confirm('you are about to delete this todo log?');
//         if (isconfirm) {
//           deleteTask(index);
//           event.target.parentElement.remove();
//         }
//       }
//     }
//   });
// };

// export { toggleCompleted, editTask, deleteTask };