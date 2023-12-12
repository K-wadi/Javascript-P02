console.log("main.js is loaded...");
// //Opdr 1.
// const run = document.querySelector(".run");
// const box = document.querySelector(".box");


// run.addEventListener('click', function(){
//     box.classList.add("error");
// });

// //Opdr 2.
// const change = document.querySelector(".change");

// change.addEventListener('click', function(){
//     box.classList.remove("error");
// });

//Opdr 3.
const toggle = document.querySelector(".toggle");
const box = document.querySelector(".box");
const animateBox = document.querySelector(".animate-box");
const animateBtn = document.querySelector(".animate");

toggle.addEventListener('click', function(){
    box.classList.toggle("error");
}); 

animateBtn.addEventListener('click', function(){
    animateBox.classList.toggle("blinker");
});