document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let taskValue = document.getElementById("new-task-description").value;
    const listUl = document.getElementById("tasks");
    const listItem = document.createElement('li');
    listUl.appendChild(listItem);
    console.log(`This is task ${taskValue}`)
    listItem.innerText = taskValue;
   
    
   
 
  });
});
