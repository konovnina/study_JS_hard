'use strict';

//Усложненное задание к уроку 9

//элементы на странице
const dateA = document.querySelector('.date__a');
const dateB = document.querySelector('.date__b');

//массивы данных
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const hours = ['час', 'часа', 'часов'];
const minutes = ['минута', 'минуты', 'минут'];
const seconds = ['секунда', 'секунды', 'секунд'];

//склонение слов
const getWord = function (num) {
  let temp = num.toString();
  let lastDigit = parseInt(temp[temp.length - 1]);

  if ((lastDigit === 1) && (num !== 11)) {
    return 0;
  } else if ((lastDigit >= 2) && (lastDigit <= 4)) {
    return 1;
  } else {
    return 2;
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
  let hour = date.getHours() + ' ' + hours[getWord(date.getHours())] + ' ';
  let minute = date.getMinutes() + ' ' + minutes[getWord(date.getMinutes())] + ' ';
  let second = date.getSeconds() + ' ' + seconds[getWord(date.getSeconds())] + ' ';

  return weekDay + monthDay + year + hour + minute + second;
};

const outputDateB = function (date) {
  let day = addDigit(date.getDate()) + '.' + addDigit(date.getMonth()) + '.' + date.getFullYear();
  let time = addDigit(date.getHours()) + ':' + addDigit(date.getMinutes()) + ':' + addDigit(date.getSeconds());
  return day + ' — ' + time;
};

const start = function (){
  setInterval(function () {
    let date = new Date();
    dateA.textContent = outputDateA(date);
    dateB.textContent = outputDateB(date);
  }, 1000);
};

start();