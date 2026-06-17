localStorage.setItem('greetings', 'Привет, мир!'); 
const greeting = localStorage.getItem('greetings');
console.log(greeting);
localStorage.removeItem('greetings');
const user = { name: 'Alice', age: 25, isLoggedIn: true };
const userJSON = JSON.stringify(user); 
const parsedUser = JSON.parse(localStorage.getItem('user'));
const user2 = JSON.parse(localStorage.getItem('user'));
user.country = 'Kazakhstan';
localStorage.setItem('user', JSON.stringify(user));
console.log(user);
if  (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).number) {
    console.log('User has a number assigned.');
}
else { 
    user.number = 1937;
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user.number);
}
for (let i = 0; i < localStorage.length; i++){
    localStorage.removeItem(localStorage.key(i));
}
const tasks = [
  {
    title: "Изучить JavaScript",
    completed: true
  },
  {
    title: "Сделать домашнее задание",
    completed: false
  },
  {
    title: "Подготовиться к экзамену",
    completed: false
  }
];
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(savedTasks);
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
if (tasks.length > 0) {
  tasks[0].completed = true;
}
localStorage.setItem("tasks", JSON.stringify(tasks));
const updatedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(updatedTasks);