document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementsByTagName('input')[1];
  submit.addEventListener('click', function(e){
    
    let tasks = document.getElementById("tasks");
    let task = document.createElement('li');
    let description = document.getElementById('new-task-description').value;
    task.innerHTML = description;
    tasks.appendChild(task);
    event.preventDefault();
  });
});
