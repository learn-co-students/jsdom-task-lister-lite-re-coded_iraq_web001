document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("submit").addEventListener("click",function() {
    event.preventDefault();
  })

})

function addToDo() {
  const list= document.createElement("li");
  const input = document.getElementById("new-task-description").value;
  list.innerHTML = `${input}`;
  const uList = document.getElementById("tasks");
  uList.appendChild(list);
  
}