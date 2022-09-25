"use strict";

// Бекграунд для header
function activeHeader() {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  });
}

activeHeader();

//Навигация по ссылкам. Без изменения URL

const orderBtn = document.getElementById("order_btn");
const solutionsBtn = document.getElementById("solutions_btn");
const featuresBtn = document.getElementById("features_btn");
const pricingBtn = document.getElementById("pricing_btn");
const companygBtn = document.getElementById("company_btn");

const idOrderContent = document.getElementById("order_content");
const idSolutions = document.getElementById("solutions");
const idFeatures = document.getElementById("features");
const idPricing = document.getElementById("pricing");
const idCompany = document.getElementById("company");

function ScrollToElement(element) {
  element.scrollIntoView({ behavior: "smooth" });
}

orderBtn.addEventListener("click", function () {
  ScrollToElement(idOrderContent);
});
solutionsBtn.addEventListener("click", function () {
  ScrollToElement(idSolutions);
});
featuresBtn.addEventListener("click", function () {
  ScrollToElement(idFeatures);
});
pricingBtn.addEventListener("click", function () {
  ScrollToElement(idPricing);
});
companygBtn.addEventListener("click", function () {
  ScrollToElement(idCompany);
});

//Переключение изображений.

const tabs = document.querySelectorAll(".creating__option");
const creatingImg = document.querySelectorAll(".tabs__img");

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabs.forEach((value) => {
      value.classList.remove("active");
    });

    creatingImg.forEach((element) => {
      element.classList.remove("active");
    });

    tab.classList.add("active");

    creatingImg[i].classList.add("active");
  });
});
