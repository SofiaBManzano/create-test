"use strict";
const input = document.querySelector(".js-input");
const btn = document.querySelector(".js-btn");
const title = document.querySelector(".js-title");
const reset = document.querySelector(".js-reset");
const handleBtnClick = (ev) => {
  ev.preventDefault();
  const inputValue = input.value;
  title.innerHTML = inputValue;
};
const handleReset = (ev) => {
  ev.preventDefault();
  title.innerHTML = "LayoutDeEjemplo";
};
btn.addEventListener("click", handleBtnClick);
reset.addEventListener("click", handleReset);
