document.getElementById("message").textContent = "Добро пожаловать в JavaScript!";
let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
   boxes[i].style.color = "green";
}
const text = document.querySelector('#text');
text.textContent = 'Не раздел 2';
const boxes2 = document.querySelectorAll('.box');
boxes2.forEach(box => {
    box.textContent= " Не раздел 1"
})
const highlighted = document.querySelectorAll('.highlight');
highlighted.forEach(highlight => {
    highlight.style.color = "red";
});
