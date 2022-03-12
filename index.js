const modal = document.getElementsByClassName("modal")[0];
const modalOverlay = document.getElementsByClassName("modal-overlay")[0];
const toggleModal = document.getElementsByClassName("modal-btn");
const toggleTheme = document.getElementById("theme")

for (const btn of toggleModal) {
  btn.addEventListener("click", () => {
    modalOverlay.classList.toggle("hide");
  });
}

toggleTheme.addEventListener("change",()=>{
    document.body.classList.toggle("body-dark")
    modal.classList.toggle("modal-dark")
})