"use strict";
let maxNumberOfIterations;
let iterartor;

init();

function init() {
  maxNumberOfIterations = 11;
  iterator = 0;
  loop();
}

function loop() {
  console.log("function loop()", iterator);
  iterator++;

  if (iterator < maxNumberOfIterations) {
    setTimeout(loop, 500);
  }
}
