function handleFormSubmit(event) {
  event.preventDefault();

  var status = document.getElementById("form-status");
  if (!status) {
    return;
  }

  status.textContent = "Thank you. Dubai Recovery will contact you shortly.";
}

function initFaq() {
  var items = document.querySelectorAll(".faq-item");

  items.forEach(function (item) {
    var button = item.querySelector(".faq-question");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      items.forEach(function (i) {
        i.classList.remove("open");
      });

      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
}

function setYear() {
  var yearSpan = document.getElementById("year");
  if (!yearSpan) {
    return;
  }

  yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
  initFaq();
  setYear();
});

