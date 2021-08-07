'use strict';

//Усложненное задание к уроку 5
//часть 1
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getNumbers = function (arr) {
  for (let i = 0; i < 7; i++) {
    do {
      arr[i] = prompt(`Введите ${i+1}-е число:`);
    } while (!isNumber(arr[i]));
    
  }
  return arr;
};

let outputNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
      console.log(arr[i]);
    }
  }
};

let arr = [];
getNumbers(arr);
outputNumbers(arr);

//часть 2
let outputPrimeNumbers = function (start, end) { 
  for (let i = start; i <= end; i++) {
    let dividers = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        ++dividers;
      }
    }
    if (dividers <= 2) {
      console.log(i + " - простое число. Делители этого числа - 1 и " + i);
    }
  }
};

outputPrimeNumbers(1, 100);


/*
//Усложненное задание к уроку 4
let operationWithString = function (str) {
  if (typeof str !== 'string') {
    return "Не строка";
  }
  str = str.trim();
  if (str.length > 30) {
    str = str.slice(0, 30);
    str += "...";
  }
  return str;
};
console.log(operationWithString(prompt("Введите строку:")));
//Усложненное задание к уроку 2
let num = 266219;
num = num.toString(); 
let mult = 1;
for (let i = 0; i < num.length; i++) {
  mult *= +num[i];
}
console.log(mult);
let powResult = mult ** 3;
console.log(powResult.toString().substring(0, 2));
//Усложненное задание к уроку 3
//Часть 1. Переменная lang может принимать 2 значения: 'ru' 'en'. Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке
let lang;
while ((lang !== 'ru') && (lang !== 'en')) {
  lang = prompt('Выберите язык (ru/en):', 'en');
}
let days = {
  en: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday',
  ru: 'Понедельник, Вторник, Среда, четверг, Пятница, Суббота, Воскресенье'
};
//a - через if
if (lang === 'en') {
  console.log(days.en);
} else {
  console.log(days.ru);
}
//b - через switch-case
switch (lang) {
  case 'en':
    console.log(days.en);
    break;
  case 'ru':
    console.log(days.ru);
    break;
  default:
    console.log('Ошибка');
}
//c - поиск и вывод данных через 2-мерный массив
let daysArray = [['en', 'ru'], [days.en, days.ru]];
console.log(daysArray[1][daysArray[0].indexOf(lang)]);
//Часть 2. У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
let namePerson = prompt('Введите ваше имя:', 'Артем');
(namePerson === 'Артем') ? console.log('Директор') :
  (namePerson === 'Максим') ? console.log('Преподаватель') :
  console.log('Студент');*/