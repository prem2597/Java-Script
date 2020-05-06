class Task {
  constructor(name, dueDate, isDone) {
    this.name = name;
    this.dueDate = dueDate;
    this.isDone = isDone;
  }

  toString() {
    return "<li><div>" + this.name + "</div></li>";
  }
}

function createTask() {
  // console.log("create task called");
  const taskNameField = document.getElementById("taskName");
  console.log(taskNameField.value());
  addTask(new Task(taskName, new Date(). false));
}

function addTask(t) {
  list = document.getElementById("todolist")
  list.innerHTML += t.toString(

  )
}

function init() {
  console.log("init called");
  task = new Task("welcome task", new Date("may 30, 2020"), false);
  console.log(task);
}

init();
