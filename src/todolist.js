const toDoList = [
  {
    description: 'Morning seesion',
    competed: true,
    index: '1',
  },
  {
    description: 'Coding collaboration',
    competed: false,
    index: '2',
  },
  {
    description: 'Stand up seesion',
    competed: false,
    index: '3',
  },
  {
    description: 'Otto weekly report',
    competed: true,
    index: '4',
  },
];

const taskBox = document.querySelector('.task-box');

const loadData = () => {
  let task = '';

  toDoList.forEach((toDo) => {
    task += `<li class='task'>
              <label for='${toDo.index}'>
                <input type='checkbox' id='${toDo.index}'>
                <p>${toDo.description}</p>
              </label>
              <div class='settings'>
                <i class='fa-solid fa-ellipsis-vertical'></i>
              </div>
            </li>
            <hr>`;

    taskBox.innerHTML = task;
  });
};

export default (loadData);