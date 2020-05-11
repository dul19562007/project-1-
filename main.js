'use strict'

// alert('Hello');

// const conf = confirm('Вы готовы продолжить?');
// console.log(conf);

// let answer = +prompt('Сколько вам лет?', '18');
// console.log(answer);
// console.log(typeof(answer));

let answers = [];

answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Какая у вас фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
document.write(answers);
console.log(answers[0]);
console.log(typeof(answers[0]));