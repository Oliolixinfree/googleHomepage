let modal = document.getElementById("modal");
let openModal = document.getElementById("openModal");
let borderChange = document.getElementById("border");
let clearButton = document.getElementById("clearButton");

openModal.onclick = () => {
  modal.style.display = "block";
  borderChange.style.borderRadius = "24px 24px 0 0";
  clearButton.style.visibility = "visible";
};

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    borderChange.style.borderRadius = "24px";
  }
});

clearButton.onclick = () => {
  openModal.value = "";
  clearButton.style.visibility = "hidden";
};
