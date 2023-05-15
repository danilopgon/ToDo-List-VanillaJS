const TASK_CLASS =
  "rounded-lg border border-b-4 border-r-4 border-black bg-gray-200 p-6 text-center text-gray-900 shadow-lg duration-300 ease-out hover:scale-105 hover:bg-lime-200 hover:text-gray-900 hover:shadow-sm active:bg-lime-600";

const title = document.querySelector("h1");
const addToDo = document.getElementById("addToDo");
const taskList = document.querySelector("ul");

const titleCheck = () => {
  taskList.children.length === 0
    ? (title.textContent = "Maybe add something...")
    : (title.textContent = "We have work to do...");
};

const setDeleteTask = (taskButton) => {
  taskButton.addEventListener("click", () => {
    taskButton.remove();
    titleCheck();
  });

  return taskButton;
};

const renderTaskButton = (inputText) => {
  const listItem = document.createElement("li");
  listItem.textContent = inputText;
  listItem.className = TASK_CLASS;
  taskList.appendChild(listItem);
  setDeleteTask(listItem);
  return listItem;
};

const setTaskInput = (addToDoInput) => {
  addToDoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let inputText = addToDoInput.value.trim();
      if (inputText.length !== 0) {
        renderTaskButton(inputText);
        addToDoInput.value = "";
        titleCheck();
      }
    }
  });
  return addToDoInput;
};

window.onload = function () {
  renderTaskButton("Eat");
  renderTaskButton("Sleep");
  renderTaskButton("Code");
  setTaskInput(addToDo);
  titleCheck();
};
