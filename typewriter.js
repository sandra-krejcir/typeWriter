"use strict";
let maxIterations;
let iterator;
const theText = document.querySelector(".typewritten").textContent.trim();

init();

function init() {
  console.log("function init()");
  maxIterations = theText.length + 1;
  iterator = 0;

  document.querySelector("#typewriter").innerHTML = "";
  loop();
}

function loop() {
  console.log("function loop()", iterator);
  console.log("theText[iterator]", theText[iterator]);
  iterator++;
  document.querySelector("#theWriter").classList.add("hide");

  if (iterator < maxIterations) {
    document.querySelector("#typewriter").textContent += theText[iterator - 1];
    document.querySelector("#theWriter").classList.remove("hide");
    setTimeout(loop, 200);
  }
}
