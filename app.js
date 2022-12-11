"use strict";
const open = document.querySelectorAll(".open");
const it = document.querySelectorAll(".it");
const buton = document.querySelectorAll(".btn");

const getStarted = document.querySelectorAll(".get");
const sign = document.querySelector(".form");

//implementing the buttons on FAQ page
for (let i = 0; i < buton.length; i++)
  buton[i].addEventListener("click", function () {
    it[i].classList.toggle("hidden");
    buton[i].style.rotate=it[i].classList.contains("hidden") "45deg" ? "-45deg";
  });
//implementing the getstarted button
for (let i = 0; i < getStarted.length; i++)
  getStarted[i].addEventListener("click", function () {
    console.log("button clicked");
    //sign.style.background = "red";
    sign.classList.toggle("hidden");
  });
