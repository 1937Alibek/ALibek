const button = document.querySelector('#jsButton');

button.addEventListener('click', () => {
   console.log('Событие обработано через JS');
});
const paragraph = document.querySelector('#myDiv');

paragraph.addEventListener('click', () => {
   paragraph.style.color = 'blue';
   console.log('Элемент нажат')
});
const input = document.getElementById("textInput");

input.addEventListener("keydown", (event) => {
 console.log(event.code);
});
const link = document.getElementById('myLink');

  link.addEventListener('click', function (event) {
    event.preventDefault(); // отменяет переход по ссылке
    console.log('Переход по ссылке отменен');
  });
const form = document.getElementById('list');
  
form.addEventListener('click' , () => {
   console.log(event.target.textContent);
})
 const input2 = document.getElementById('keyboardInput');

  input2.addEventListener('keydown', function (event) {
    console.log(event.code);
  });