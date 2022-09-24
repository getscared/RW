function activeHeader() {
  const header = document.querySelector(".header");
  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  };
}

activeHeader();

const orderBtn = document.getElementById("order_btn");
orderBtn.addEventListener("click", scrollIntoElement());
function ScrollToElement() {
  const idCompany = document.getElementById("company");
  window.scrollIntoView(idCompany);
}
