`use strict`;

const buttonOpenModal = document.getElementById("modal_btn");
const buttonOpenModal2 = document.getElementById("modal_open_2");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal_form");
const overlay = document.querySelector(".overlay");

//console.log(buttonOpenModal);
//console.log(modal);

buttonOpenModal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

buttonOpenModal2.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  e.preventDefault();
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".modal_form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(document.getElementById("form-moveon"));

    if (error === 0) {
      form.classList.add("_sending");
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  }
  function formAddError(input) {
    //input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
});
