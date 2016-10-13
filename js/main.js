"use strict";
{
  document.addEventListener("DOMContentLoaded", main);

  function main() {
    const canvas  = document.querySelector("#stage");
    const context = canvas.getContext("2d");
    context.font = "48px serif";
    context.fillText("Hello World.", 100, 100);
  }
}
