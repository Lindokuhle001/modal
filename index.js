const modal = document.getElementsByClassName("modal-overlay")[0];
const toggleModal = document.getElementsByClassName("modal-btn");


for (const btn of toggleModal) {
  btn.addEventListener("click", () => {
    modal.classList.toggle("hide");
  });
}
