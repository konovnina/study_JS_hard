'use strict';

//Усложненное задание к уроку 9

//элементы на странице
let dateA = document.querySelector('.date__a');
let dateB = document.querySelector('.date__b');

//массивы данных
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

//склонение слов
const declension = function (num, tag) {
  let temp = num.toString();
  let lastDigit = parseInt(temp[temp.length - 1]);

  if (tag === 'h') {
    if ((lastDigit >= 2) && (lastDigit <= 4)) {
      return num + ' часа';
    } else if ((lastDigit === 1) && (num !== 11)) {
      return num + ' час';
    } else {
      return num + ' часов';
    }
  }

  if (tag === 'm') {
    if ((lastDigit >= 2) && (lastDigit <= 4)) {
      return num + ' минуты';
    } else if ((lastDigit === 1) && (num !== 11)) {
      return num + ' минута';
    } else {
      return num + ' минут';
    }
  }

  if (tag === 's') {
    if ((lastDigit >= 2) && (lastDigit <= 4)) {
      return num + ' секунды';
    } else if ((lastDigit === 1) && (num !== 11)) {
      return num + ' секунда';
    } else {
      return num + ' секунд';
    }
  }

};
 
//подставить 0 в начало
const addDigit = function (num) {
  if (num.toString().length === 1) {
    return '0' + num.toString();
  } else {
    return num;
  }
};

const outputDateA = function (date) {
  let weekDay = 'Сегодня ' + week[date.getDay() - 1] + ', ';
  let monthDay = date.getDate() + ' ' + month[date.getMonth() - 1] + ' ';
  let year = date.getFullYear() + ' года, ';  
  let hours = declension(date.getHours(), 'h') + ' ';
  let minutes = declension(date.getMinutes(), 'm') + ' ';
  let seconds = declension(date.getSeconds(), 's') + ' ';

  return weekDay + monthDay + year + hours + minutes + seconds;
};

let outputDateB = function (date) {
  let day = addDigit(date.getDate()) + '.' + addDigit(date.getMonth()) + '.' + date.getFullYear();
  let time = addDigit(date.getHours()) + ':' + addDigit(date.getMinutes()) + ':' + addDigit(date.getSeconds());
  return day + ' — ' + time;
};

let start = function (){
  setInterval(function () {
    let date = new Date();
    dateA.textContent = outputDateA(date);
    dateB.textContent = outputDateB(date);
  }, 1000);
};

start();