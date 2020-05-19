document.addEventListener("DOMContentLoaded", () => {
  // your code here
let listUl = document.getElementById("tasks");

  document.querySelector("#btn-submit").addEventListener("click", function(event) {
         event.preventDefault();
         let inputText = document.getElementById("new-task-description").value;
         let li = document.createElement("li");
         li.innerText = inputText;
         listUl.appendChild(li);
}, false);

});