 
 function newElement() {
 var li = document.createElement("li");
var z = document.getElementById("myInput").value
var w = document.getElementById("submit")
var t = document.createTextNode(z);
 
li.appendChild(t);

  document.getElementById("tasks").appendChild(li);}