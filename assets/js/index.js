"use strict";

let add = document.querySelector('#increase');
let sub = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let number = document.querySelector('#number');
let count = 0;

add.addEventListener("click", () => {
    count++;
    number.innerHTML = count;
});

sub.addEventListener("click", () => {
    count--
    number.innerHTML = count;
});

reset.addEventListener("click", () => {
    count = 0;
    number.innerHTML = count;
});