function loadTasks() {
  fetch("/tasks")
    .then(res => res.json())
    .then(tasks => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      tasks.foreach(task => { // BUG: should be forEach
        let li = document.createElement("li");

        if (task.done) {
          li.innerHTML = "<s>" + task.text + "</s>";
        } else {
          li.innerHTML = task.text +
            ` <button onclick="completeTask(${task.id})">Done</button>`; // BUG: id should be quoted
        }

        list.appendChild(li);
      });
    });
}

function addTask() {
  const input = document.getElementById("taskInput");

  fetch("/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: input.value
    })
  }).then(() => {
    input.value = "";
    loadTasks();
  });
}

function completeTask(id) {
  fetch("/tasks/" + id, {
    method: "PUT"
  }).then(() => loadTasks());
}

loadTasks();
