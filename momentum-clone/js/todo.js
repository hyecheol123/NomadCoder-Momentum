// HTML elements
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

// Retrieve ToDo list from localStorage
const savedToDo = localStorage.getItem('todos');
let toDoArray;
if(savedToDo === null) { // Nothing saved
  toDoArray = []; // make new ToDo List
} else {
  toDoArray = JSON.parse(savedToDo); // retrieve existing ToDo
  // Print each array to the list
  toDoArray.forEach((todo) => {
    printToDo(todo);
  })
}

// Method to paint ToDo item
function printToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  li.id = newToDo.id;
  span.innerText = newToDo.content;
  toDoList.appendChild(li);

  // Delete Button
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", (mouseEvent) => {
    // Delete from view
    const deleteTarget = mouseEvent.target.parentElement;
    deleteTarget.remove();
    
    // Delete from localStorage
    toDoArray = toDoArray.filter((todo) => {
      return todo.id !== parseInt(deleteTarget.id);
    });
    localStorage.setItem("todos", JSON.stringify(toDoArray));
  });
  li.appendChild(button);
}

// When new ToDo entered, it will save new todo and print on the screen.
toDoForm.addEventListener("submit", (submitEvent) => {
  // Prevent refresh
  submitEvent.preventDefault();

  // Retrieve the user's input
  const newToDo = {id: Date.now(), content: toDoInput.value};
  toDoInput.value = "";

  // Save ToDo list
  toDoArray.push(newToDo);
  localStorage.setItem("todos", JSON.stringify(toDoArray));
  printToDo(newToDo); // print ToDo
});
