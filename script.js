const textArea = document.getElementById("textArea");

textArea.addEventListener("input", saveText);

function saveText() {
  localStorage.setItem("savedText", textArea.value);
}

if (localStorage.getItem("savedText")) {
  textArea.value = localStorage.getItem("savedText");
}
