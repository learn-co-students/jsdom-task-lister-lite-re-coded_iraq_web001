document.addEventListener("DOMContentLoaded", () => {

  // your code here
  let taskDescription= document.getElementById('new-task-description');
  const submit= document.getElementsByTagName('input')[1];
  let tasksList=document.getElementById('tasks');
  const form= document.getElementById('create-task-form');
  let tasks=[];

  submit.addEventListener('click',function(event){

    event.preventDefault();
    if(taskDescription&& taskDescription.value){
    let task ={

      title: taskDescription
    }
    tasks.push(task);

    let listItem=document.createElement('li');
    let delBtn=document.createElement('button');

    listItem.innerText= task.title.value;
    delBtn.innerText= " x";

    listItem.appendChild(delBtn);
    tasksList.appendChild(listItem);

    delBtn.onclick= function(){
    tasksList.removeChild(listItem);
    };

    form.reset();

  }
  else{

    alert("please type your task before submitting");
  }
  })
});
