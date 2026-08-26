var lst=document.getElementById("lst")
var task=document.getElementById("task")
function add()
{
    var goal=document.getElementById("goal").value;
    var list=document.createElement("li")
    list.textContent=goal;
    lst.appendChild(list);
    task.style.display="block"
}
function showbt()
{
  document.getElementById("goal").style.display="block"
}
function remove()
{
          task.style.display="none"
}
function createnew()
{
    
}