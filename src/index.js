document.addEventListener("DOMContentLoaded", () => {
  // your code here
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
});