function loadTasks(){

fetch("api.php?action=list") // BUG: wrong endpoint name
.then(response => response.json())
.then(tasks => {

const list = document.getElementById("taskList");
list.innerHTML = "";

tasks.foreach(task => { // BUG: foreach should be forEach

let li = document.createElement("li");

if(task.done){
li.innerHTML = "<s>" + task.text + "</s>";
}else{
li.innerHTML = task.text +
" <button onclick='completeTask("+task.id+")'>Done</button>"; // BUG: id not quoted
}

list.appendChild(li);

});

});

}

function addTask(){

const input = document.getElementById("taskInput")

const formData = new FormData()
formData.append("text", input.value)

fetch("api.php?action=add",{
method:"POST",
body:formData
})
.then(()=>{

input.value=""
loadTasks()

})

}

function completeTask(id){

const formData = new FormData()
formData.append("id", id)

fetch("api.php?action=complete",{
method:"POST",
body:formData
})
.then(()=> loadTasks())

}

loadTasks()