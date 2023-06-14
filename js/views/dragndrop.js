const draggableElements = document.querySelectorAll(".draggable")
const droppableElements = document.querySelectorAll(".droppable")

draggableElements.forEach(element => {
  element.addEventListener("dragstart", dragStart)
  element.addEventListener("dragend", dragEnd)
});

droppableElements.forEach(element => {
  element.addEventListener("dragenter", dragEnter)
  element.addEventListener("dragover", dragOver)
  element.addEventListener("dragleave", dragLeave)
  element.addEventListener("drop", drop)
})

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id)
  draggedElement = event.target
}

function dragEnd(event){
  draggedElement = null
}

function dragEnter(event) {
  event.preventDefault()
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover")
  }
}

function dragOver(event) {
  event.preventDefault()
}

function dragLeave(event) {
  event.target.classList.remove("droppable-hover")
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable-hover");

  if (event.target.classList.contains("dropped")) {
    return;
  }

  const droppableElement = event.target;
  const draggableElementData = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(draggableElementData);
  const correctId = droppableElement.getAttribute("data-draggable-id");

  if (draggableElementData === correctId) {
    droppableElement.appendChild(draggableElement);
    droppableElement.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
  }
}