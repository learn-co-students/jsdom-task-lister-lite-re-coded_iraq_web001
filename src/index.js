document.addEventListener("DOMContentLoaded", () => {
  const Ltask= new Ltask()
  // your code here
  const create-task-form = document.getElementById('create-task-form')
  let new_task = document.getElementById("new-task-description")
  let task = document.getElementById('tasks')

  const run = () => (task.innerHtml = Ltask.renderTasks());

  new_task.addEventListener("submit",(e)=>{
    e.preventDefault();
    Ltask.createNewTask(createNewTask.value)
  e.target.reset()
  run()
  })
  task.addEventListener("click",(e)=>{
    if (e.target.nodeName==="BUTTON"){
      Ltask.deleteTask(e.target.dataset.description)
      run()
    }
  })


});
