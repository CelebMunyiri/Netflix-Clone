"use strict";
const open = document.querySelectorAll(".open");
const it = document.querySelectorAll(".it");
const buton = document.querySelectorAll(".btn");
const butn = document.querySelectorAll(".butn");

for (let i = 0; i < buton.length; i++)
  for (let i = 0; i < it.length; i++)
    buton[i].addEventListener("click", function () {
      it[i].classList.remove("hidden");
      buton[i].classList.add("hidden");
      butn[i].classList.remove("hidden");
      for (let i = 0; i < open.length; i++) open[i].style.margin = "10px";
      it[i].style.margin = "10px";
      for (let i = 0; i < butn.length; i++)
        butn[i].addEventListener("click", function () {
          buton[i].classList.remove("hidden");
          butn[i].classList.add("hidden");
          it[i].classList.add("hidden");
        });
    });