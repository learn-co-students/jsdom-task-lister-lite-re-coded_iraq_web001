document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements
    const tasks=document.getElementById('tasks');
  const form=document.getElementById('create-task-form');
  const title=document.getElementById('new-task-description');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    tasks.insertAdjacentHTML(
    "afterbegin",`<li>${title.value}</li>`
  )
  title.value='';
  })

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};