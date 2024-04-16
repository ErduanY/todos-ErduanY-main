import "./../scss/style.scss"
import { TodoList } from "./task.js";

/* Hämtar mina HTML IDn */
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

const task1 = new TodoList("Gymma", false);
const task2 = new TodoList("Fixa mat", false);
const task3 = new TodoList("Plugga", false);

let myTodo = [task1, task2, task3];

/* loopar igenom min färdiga lista och presenterar den i DOMen samt skapar en delete knapp för varje item jag har i min lista */
const myList = () => {
  const app = document.getElementById("app");
  app.innerHTML = "";

  for (let i = 0; i < myTodo.length; i++) {
    const container = document.createElement("li");
    const title = document.createElement("ul");
    const removeButton = document.createElement("div");

    title.innerHTML = myTodo[i].task;
    removeButton.innerHTML = ` <button class="delete-btn">Delete</button>`;
    removeButton.addEventListener("click", () => {
      myTodo.splice(i, 1);
      myList();
    });

    
    if (myTodo[i].isCompleted === true) {
      title.className = "title";
    }

    title.addEventListener("click", () => {
      myTodo[i].isCompleted = true;
      myList();
    })

    container.appendChild(title);
    app.appendChild(container);
    container.appendChild(removeButton);
  };
};
myList();


/* Skapar en funktion som visar texten jag skriver i en lista med en "delete" knapp bredvid */

    addBtn.addEventListener('click', () => {
      if(taskInput.value !== "") {
          const taskText = taskInput.value
          const newTask = new TodoList(taskText, false);
          myTodo.push(newTask);
          taskInput.value = "";
          myList();                        
      }
  });
  



/* Skapar en funktion som tar bort min "todo" när jag trycker på delete knappen */
taskList.addEventListener('click', (event) => {
  if(event.target.classList.contains("delete-btn")) {
      const listItem = event.target.parentElement;
      taskList.removeChild(listItem);
  }
})

/* Gör så att när jag trycker på enter så skrivs texten ut */

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const taskText = taskInput.value
          const newTask = new TodoList(taskText, false);
          myTodo.push(newTask);
          taskInput.value = "";
          myList();        
  }
})


















