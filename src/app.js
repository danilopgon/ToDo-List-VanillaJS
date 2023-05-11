const TASK_CLASS =
  "rounded-lg border border-b-4 border-r-4 border-black bg-gray-200 p-6 text-center text-gray-900 shadow-lg duration-300 ease-out hover:scale-105 hover:bg-lime-200 hover:text-gray-900 hover:shadow-sm active:bg-lime-600";

const title = document.querySelector("h1");
const taskList = document.querySelector("ul");

const titleCheck = () => {
  taskList.children.length === 0
    ? (title.textContent = "Maybe add something...")
    : (title.textContent = "We have work to do...");
};

const setDeleteTask = () => {
  const buttons = document.querySelectorAll("li");
  buttons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      deleteButton.remove();
      titleCheck();
    });
  });
};

const setTaskToDo = (inputText) => {
  const listItem = document.createElement("li");
  listItem.textContent = inputText;
  listItem.className = TASK_CLASS;
  taskList.appendChild(listItem);
};

const addToDo = document.getElementById("addToDo");

addToDo.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let inputText = addToDo.value.trim();
    if (inputText.length !== 0) {
      setTaskToDo(inputText);
      addToDo.value = "";
      setDeleteTask();
      titleCheck();
    }
  }
});

window.onload = function () {
  setDeleteTask();
  titleCheck();
};
