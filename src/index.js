document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener("submit", (e) => {
    // your code here
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    const task = document.getElementById('new-task-description');
    li.innerHTML = task.value;
    ul.appendChild(li);

    e.preventDefault();
  });
});
 
