`use strict`;

const buttonOpenModal = document.getElementById("modal_btn");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal_form");
const overlay = document.querySelector(".overlay");

console.log(buttonOpenModal);
console.log(modal);

buttonOpenModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
